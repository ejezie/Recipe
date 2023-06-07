import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import formatText from "utils/formatText";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipeInfoAction } from "redux/slice/recipes.slice";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { greybg } from "assets/images";

const RecipeItem = ({ id, filters }) => {
  const { isLoading, recipesInfo } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const memoizedRecipeItem = useMemo(() => {
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
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <div className="transition transform duration-700 ">
          {isLoading ? (
            <Skeleton />
          ) : (
            // <Link
            //   to={`details/${id}`}
            //   className="bg-white rounded-lg  overflow-hidden"
            //   style={{ textDecoration: "none" }}
            // >
            //   <div className="w-full h-56 overflow-hidden">
            //     <img
            //       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            //       src={data?.image || greybg}
            //       alt=""
            //     />
            //   </div>

            //   <div className="px-4 py-3">
            //     <h1 className="text-gray-700 text-[16px] md:text-[22px] font-semibold transition-all duration-300 hover:underline pr-2 pl-2">
            //       {data?.title}
            //     </h1>
            //     <div className="text-gray-400 text-sm mt-2 pr-4 pl-4">
            //       {formatText(data?.summary, 150)}
            //     </div>
            //   </div>
            //   <div className="text-red-500">{data?.readyInMinutes} mins</div>
            // </Link>
            <Link
              to={`details/${id}`}
              className="bg-white card hover:shadow-lg rounded-lg flex flex-col justify-left  w-full max-w-[300px] h-[380px] overflow-hidden"
              style={{ textDecoration: "none" }}
            >
              <div className="w-full h-46 overflow-hidden">
                <img
                  src={data?.image || greybg}
                  alt="stew"
                  className="object-cover w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-2 mt-5">
                <span className="font-bold text-gray-700 text-left">{formatText(data?.title, 60)}</span>
              </div>
              <div className="pt-2 pr-5 pl-5 pb-10">
                <span className="block text-gray-500 text-sm text-left">{formatText(data?.summary, 55)}</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{data?.readyInMinutes} mins</span>
              </div>
            </Link>
          )}
        </div>
      </motion.div>
    );
  }, [isLoading, recipesInfo, id, filters, dispatch, inView, ref]);

  return memoizedRecipeItem;
};

export default RecipeItem;
