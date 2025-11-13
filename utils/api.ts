import { Course, TeamMember, TeamData } from '../types';

// --- Parsers ---

const parseCoursesCSV = (csvText: string): Course[] => {
  const lines = csvText.trim().replace(/^\uFEFF/, '').split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const courses: Course[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.replace(/^"|"$/g, '').trim());
    if (values.length !== headers.length) continue;
    
    const entry = Object.fromEntries(headers.map((header, index) => [header, values[index]]));

    const courseName = entry['CourseName'] || '';
    if (!courseName || courseName === '##') continue;

    courses.push({
      title: courseName,
      description: entry['Description'] || 'لا يوجد وصف متاح حاليًا.',
      price: Number(entry['Price (EGP)']) || 0,
      imageUrl: (entry['ImageURL'] && entry['ImageURL'] !== '##') ? entry['ImageURL'] : `https://picsum.photos/seed/${encodeURIComponent(courseName)}/600/400`,
      bookingUrl: (entry['BookingLink'] && entry['BookingLink'] !== '##') ? entry['BookingLink'] : '#',
      instructor: entry['Instructor'] || 'غير محدد',
      days: entry['days'] || 'لم يحدد بعد',
      time: entry['Time'] || 'لم يحدد بعد',
    });
  }
  return courses;
};

const parseTeamCSV = (csvText: string): TeamData => {
    const lines = csvText.trim().replace(/^\uFEFF/, '').split(/\r?\n/);
    if (lines.length < 2) return { team: [], volunteers: [] };

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const team: TeamMember[] = [];
    const volunteers: TeamMember[] = [];
    
    const nameIndex = headers.indexOf('Name');
    const jobTitleIndex = headers.indexOf('Job Title');
    const imageUrlIndex = headers.indexOf('ImageURL');

    if (nameIndex === -1 || jobTitleIndex === -1 || imageUrlIndex === -1) return { team: [], volunteers: [] };
    
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const values = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.replace(/^"|"$/g, '').trim());
        if (values.length !== headers.length) continue;

        const memberName = values[nameIndex] || '';
        if (!memberName || memberName === '##') continue;

        const jobTitle = values[jobTitleIndex] || 'عضو فريق';
        const member: TeamMember = {
            name: memberName,
            jobTitle: jobTitle,
            imageUrl: (values[imageUrlIndex] && !['##', '[URL]'].includes(values[imageUrlIndex])) 
                ? values[imageUrlIndex] 
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(memberName)}&background=0284c7&color=fff&size=300`,
        };
        
        if (jobTitle.trim() === 'متطوع') {
            volunteers.push(member);
        } else {
            team.push(member);
        }
    }
    return { team, volunteers };
};


// --- Fetchers with Fallback ---

const G_SHEET_COURSES_URL = 'https://docs.google.com/spreadsheets/d/1gDezPKQCsteICHlqu-gSRcNyXF8Y1BfN4npQpaNkI8Y/export?format=csv&gid=0';
const G_SHEET_TEAM_URL = 'https://docs.google.com/spreadsheets/d/19Rc7EbaEFPjdszXG23h9uU7UBopvtEAY3aLTdRGbYzA/export?format=csv&gid=0';


const LOCAL_COURSES_URL = '/data/courses.csv';
const LOCAL_TEAM_URL = '/data/team.csv';


async function fetchDataWithFallback(liveUrl: string, fallbackUrl: string): Promise<string> {
    try {
        const response = await fetch(liveUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.text();
    } catch (error) {
        console.warn(`Failed to fetch live data from ${liveUrl}. Falling back to local data.`, error);
        const response = await fetch(fallbackUrl);
        if (!response.ok) throw new Error(`Failed to fetch fallback data from ${fallbackUrl}`);
        return await response.text();
    }
}

export const fetchCourses = async (): Promise<Course[]> => {
    const csvText = await fetchDataWithFallback(G_SHEET_COURSES_URL, LOCAL_COURSES_URL);
    return parseCoursesCSV(csvText);
};

export const fetchTeamData = async (): Promise<TeamData> => {
    const csvText = await fetchDataWithFallback(G_SHEET_TEAM_URL, LOCAL_TEAM_URL);
    return parseTeamCSV(csvText);
};
