import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { getRecipesAction } from "redux/slice/recipes.slice";
import Skeleton from "components/primitives/Skeleton";

const RecipeItem = lazy(() => import("../primitives/RecipeItem"));

const filters = [
  "vegetarian",
  "vegan",
  "glutenFree",
  "ketogenic",
  "dairyFree",
  "veryHealthy",
];

const Recipes = ({ ingredients }) => {
  const [itemNumber, setItemNumber] = useState(3);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const { recipesAll, isLoading } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const handleCheckboxChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleNextPage = () => {
    setItemNumber((prev) => prev + 3);
  };

  useEffect(() => {
    dispatch(
      getRecipesAction({
        recipes: ingredients,
        number: itemNumber,
      })
    );
  }, [dispatch, ingredients, itemNumber]);

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-center flex-col">
      <div className="overflow-x-auto max-w-full border-b-2 border-t-2">
        <div className="flex  pt-4 pb-4">
          {filters.map((filter) => (
            <div className="flex items-center mr-5 ml-5" key={filter}>
              <input
                type="checkbox"
                id={filter}
                className="form-checkbox text-indigo-600 h-5 w-5"
                checked={selectedFilters.includes(filter)}
                onChange={() => handleCheckboxChange(filter)}
              />
              <label
                htmlFor={filter}
                className="ml-2 text-gray-700 whitespace-no-wrap"
              >
                {filter}
              </label>
            </div>
          ))}
        </div>
      </div>

      {recipesAll.length === 0 ? (
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex items-center flex-col text-sm mt-12 mb-4">
            <FaSearch size={"40px"} color="#374151" className="mb-2" />{" "}
            <span>No results found</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {recipesAll.map((item) => (
            <Suspense fallback={<Skeleton key={item?.id} />}>
              <RecipeItem
                key={item?.id}
                id={item?.id}
                filters={selectedFilters}
              />
            </Suspense>
          ))}
        </div>
      )}

      {recipesAll.length > 0 && !isLoading && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100"
            onClick={handleNextPage}
          >
            Next Page
          </button>
        </div>
      )}
    </section>
  );
};

export default Recipes;
