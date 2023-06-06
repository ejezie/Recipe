import React from "react";
import { useSelector } from "react-redux";
import RecipeItem from "components/primitives/RecipeItem";
import { FaSearch } from "react-icons/fa";

const Recipes = () => {
  const { recipesAll } = useSelector((state) => state.recipes);


  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6 flex items-center justify-center">
      {recipesAll.length === 0 ? (
        <div className="flex items-center justify-center h-full w-full ">
          <div className="flex items-center flex-col text-sm">
            <FaSearch size={"40px"} color="#374151" className="mb-2" />{" "}
            <span>No results found</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {recipesAll &&
            recipesAll?.map((item) => (
              <RecipeItem key={item?.id} id={item?.id} />
            ))}
        </div>
      )}
    </section>
  );
};

export default Recipes;
