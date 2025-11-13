
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} UCCD - Menofia university. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;