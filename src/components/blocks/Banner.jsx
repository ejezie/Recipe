import React from "react";
import useDebounce from "hooks/useDebounce";
import formatIngredient from "utils/formatIgredient";
import { useDispatch } from "react-redux";
import {
  getRecipesAction,
  getRandomRecipesAction,
} from "redux/slice/recipes.slice";

const Banner = ({ setIngredients }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [formattedValue, setFormattedValue] = React.useState("");

  const dispatch = useDispatch();
  const debouncedInputValue = useDebounce(inputValue, 300);

  const handleClick = () => {
    formattedValue && dispatch(getRecipesAction({ recipes: formattedValue }));
  };

  const handleClickRandom = () => {
    dispatch(getRandomRecipesAction());
  };

  React.useEffect(() => {
    setFormattedValue(formatIngredient(debouncedInputValue));
    setIngredients(formatIngredient(debouncedInputValue));
  }, [debouncedInputValue, setIngredients]);

  return (
    <section className="header-banner h-96 w-full bg-yellow-50 bg-red-700 pr-10 pl-10 md:pr-40 md:pl-40 ">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          All Your Recipes In One Place
        </h1>

        <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full mb-5 flex items-center">
          <input
            type="text"
            className="rounded-full px-4 focus:outline-none w-full bg-transparent "
            placeholder="Search recipe separated by comma..."
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            onClick={handleClick}
            className="text-sm bg-primary py-3 px-6 rounded-full text-gray-700 poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-102 transform hover:bg-red-100"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleClickRandom}
          className="text-sm text-gray-700 bg-[rgba(0, 0, 0, 0.2)] py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform hover:bg-red-100"
        >
          Random Recipes
        </button>
      </div>
    </section>
  );
};

export default Banner;
