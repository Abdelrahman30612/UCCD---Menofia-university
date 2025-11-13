import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';

interface CoursesSectionProps {
  courses: Course[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
  
  if (courses.length === 0) {
    return <div className="text-center py-16 text-gray-400">لا توجد دورات متاحة حاليًا.</div>;
  }

  return (
    <section id="courses" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">التدريبات المتاحة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;