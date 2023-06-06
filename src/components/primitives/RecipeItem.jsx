import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import formatText from "utils/formatText";
import { Link } from "react-router-dom";

const RecipeItem = ({ id }) => {
  const { isLoading, recipesInfo } = useSelector((state) => state.recipes);

  const memoizedRecipeItem = React.useMemo(() => {
    const data = recipesInfo[id];

    return isLoading ? (
      <Skeleton />
    ) : (
      data && (
        <Link
          to={`details/${id}`}
          className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
        >
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src={data?.image}
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">{data?.title}</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              {formatText(data?.summary, 150)}
            </p>
          </div>
        </Link>
      )
    );
  }, [isLoading, recipesInfo, id]);

  return memoizedRecipeItem;
};

export default RecipeItem;
