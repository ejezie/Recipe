import React from "react";
import { useSelector } from "react-redux";
import formatText from "utils/formatText";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  const { isLoading, recipesInfo } = useSelector((state) => state.recipes);
  const data = recipesInfo[id];

  return (
    <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
      {isLoading ? (
        <div>
          <HashLoader color="#374151" />
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={data?.image}
              alt={data?.title}
            />
          </div>
          <div className="flex mt-6 space-x-3 ">
            <div>{/* <img src={icon} alt={title} className="w-36" /> */}</div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">{data?.title}</h1>
              <p className="text-sm text-gray-500 poppins">{formatText(data?.summary, 500)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
