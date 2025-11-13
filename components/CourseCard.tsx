import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const placeholderImageUrl = `https://picsum.photos/seed/${encodeURIComponent(course.title)}/600/400`;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholderImageUrl;
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <img 
        src={course.imageUrl} 
        alt={course.title} 
        className="w-full h-48 object-cover"
        onError={handleImageError}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-white">{course.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{course.description}</p>
        
        <div className="border-t border-gray-700 mt-auto pt-4 space-y-3">
          <div className="flex items-center text-gray-300 text-sm">
              <span className="font-semibold text-gray-400 ml-2">المدرب:</span>
              <span>{course.instructor}</span>
          </div>
           <div className="flex items-center text-gray-300 text-sm">
              <span className="font-semibold text-gray-400 ml-2">الايام:</span>
              <span>{course.days}</span>
          </div>
           <div className="flex items-center text-gray-300 text-sm">
              <span className="font-semibold text-gray-400 ml-2">الساعه:</span>
              <span>{course.time}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-amber-400 text-lg">
              {course.price === 0 ? 'مجاني' : `${course.price} جنيه`}
            </span>
            <a 
              href={course.bookingUrl} 
              className="bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300"
            >
              سجل الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;