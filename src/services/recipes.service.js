import axios from "axios";
import { baseUrl } from "configs/environment.config";
import { SEARCH_RECIPES_INGREDIENT, GET_RECIPES_INFO, GET_RANDOM_RECIPES } from "./CONSTANTS";

export const getAllRecipes = (ingredients, number) => {
  // setup axios configuration
  const config = {
    url: `${baseUrl}${SEARCH_RECIPES_INGREDIENT}?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}&number=${number}`,
    method: "GET",
  };
  return axios(config);
};

export const getRecipesInfo = (id) => {
  const config = {
    url: `${baseUrl}${id}/${GET_RECIPES_INFO}?apiKey=${process.env.REACT_APP_API_KEY}`,
    method: "GET",
  };
  return axios(config);
};

export const getRandomRecipes = (number) => {
  const config = {
    url: `${baseUrl}${GET_RANDOM_RECIPES}?apiKey=${process.env.REACT_APP_API_KEY}&number=${number}`,
    method: "GET",
  };
  return axios(config);
};
