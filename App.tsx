import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import { Course, TeamData } from './types';
import { fetchCourses, fetchTeamData } from './utils/api';

export type Tab = 'home' | 'courses' | 'team';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [courses, setCourses] = useState<Course[]>([]);
  const [teamData, setTeamData] = useState<TeamData>({ team: [], volunteers: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Fetch all datasets in parallel
        const [coursesData, teamDataResult] = await Promise.all([
          fetchCourses(),
          fetchTeamData(),
        ]);
        setCourses(coursesData);
        setTeamData(teamDataResult);
      } catch (err) {
        console.error("Failed to load initial data:", err);
        setError("فشل تحميل بعض البيانات. قد يتم عرض بيانات احتياطية.");
        // Even if there's an error, the fetch functions have fallbacks, so we might have data.
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-amber-400 flex justify-center items-center text-2xl font-bold">
        جاري تحميل بيانات المركز...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8 pt-24 flex-grow">
        {error && <p className="text-center text-yellow-500 mb-4">{error}</p>}
        {activeTab === 'home' && (
          <>
            <AboutSection />
            <ContactSection />
          </>
        )}
        {activeTab === 'courses' && <CoursesSection courses={courses} />}
        {activeTab === 'team' && <TeamSection data={teamData} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
