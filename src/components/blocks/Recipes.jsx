import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "components/primitives/Skeleton";
import RecipeItem from "components/primitives/RecipeItem";
import { FaSearch } from "react-icons/fa";

const Recipes = () => {
  const { recipesAll, isLoading } = useSelector((state) => state.recipes);

  console.log(recipesAll, "Recipes loaded");

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {isLoading && recipesAll.length === 0 ? (
          [1, 2, 3].map((_, idx) => <Skeleton />)
        ) : recipesAll.length === 0 ? (
          <div className="flex items-center justify-center text-4xl">
            {isLoading ? [1, 2, 3].map((_, idx) => <Skeleton />) : <FaSearch />}
          </div>
        ) : (
          recipesAll.map((item) =>
            isLoading ? (
              [1, 2, 3].map((_, idx) => <Skeleton />)
            ) : (
              <RecipeItem key={item?._id} id={item?._id} />
            )
          )
        )}
      </div>
    </section>
  );
};

export default Recipes;
