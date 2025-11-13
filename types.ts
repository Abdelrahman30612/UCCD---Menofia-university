export interface Course {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  bookingUrl: string;
  instructor: string;
  days: string;
  time: string;
}

export interface TeamMember {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

export interface TeamData {
  team: TeamMember[];
  volunteers: TeamMember[];
}
