import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} MyRecipeWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
