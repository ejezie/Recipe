import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import formatText from "utils/formatText";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipeInfoAction } from "redux/slice/recipes.slice";

const RecipeItem = ({ id, filters }) => {
  const { isLoading, recipesInfo } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const memoizedRecipeItem = React.useMemo(() => {
    const data = recipesInfo[id];

    if (!data) {
      if (!isLoading) {
        dispatch(getRecipeInfoAction(id));
      }
      return null;
    }

    if (filters.length > 0 && !filters.some((filter) => data[filter])) {
      return null;
    }

    return (
      <div className="transition transform duration-700">
        {isLoading ? (
          <Skeleton />
        ) : (
          <Link
            to={`details/${id}`}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
            style={{ textDecoration: "none" }}
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src={data?.image}
                alt=""
              />
            </div>

            <div className="px-4 py-3">
              <h1 className="text-gray-900 text-lg font-semibold transition-all duration-300 hover:underline">
                {data?.title}
              </h1>
              <p className="text-gray-600 text-sm mt-2">{formatText(data?.summary, 150)}</p>
            </div>
          </Link>
        )}
      </div>
    );
  }, [isLoading, recipesInfo, id, filters, dispatch]);

  return memoizedRecipeItem;
};

export default RecipeItem;
