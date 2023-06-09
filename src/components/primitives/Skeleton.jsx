import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-white w-full overflow-hidden border border-gray-100 transition transform duration-700 p-4 rounded-lg relative">
      <div className="recipe-card-shimmer w-64 h-48 bg-gray-200 mx-auto transform transition duration-300 animate-shimmer"></div>
      <div className="recipe-card-shimmer flex flex-col items-center my-3 space-y-2">
        <div className="recipe-card-shimmer w-36 bg-gray-300 py-3"></div>
        <p className="recipe-card-shimmer w-72 bg-gray-200 py-1"></p>
      </div>
      <p className="recipe-card-shimmer w-72 bg-gray-200 py-1"></p>
    </div>
  );
};

export default Skeleton;
