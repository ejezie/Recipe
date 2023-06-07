import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllRecipes, getRandomRecipes, getRecipesInfo } from "services/recipes.service";
import { formatErrorResponse } from "utils/formatErrorResponse";

export const getRecipesAction = createAsyncThunk(
  "recipes/all",
  async ({recipes, number=3}, thunkAPI) => {
    try {
      const response = await getAllRecipes(recipes, number);
      return response.data;
    } catch (error) {
      const errorMessage = formatErrorResponse(error);
      console.log(error, "recipes");
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getRandomRecipesAction = createAsyncThunk(
  "recipes/random",
  async (number=3, thunkAPI) => {
    try {
      const response = await getRandomRecipes(number);
      return response.data.recipes;
    } catch (error) {
      const errorMessage = formatErrorResponse(error);
      console.log(error, "recipes");
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getRecipeInfoAction = createAsyncThunk(
  "recipes/info",
  async (id, thunkAPI) => {
    try {
      const response = await getRecipesInfo(id);
      return response.data;
    } catch (error) {
      const errorMessage = formatErrorResponse(error);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  recipesAll: [],
  recipesInfo: {},
  isLoading: true,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // All recipes cases
    builder.addCase(getRecipesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecipesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipesAll = action.payload;
    });
    builder.addCase(getRecipesAction.rejected, (state) => {
      state.isLoading = false;
    });

    // Recipe Info Cases
    builder.addCase(getRecipeInfoAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecipeInfoAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipesInfo[action.payload.id] = action.payload;
    });
    builder.addCase(getRecipeInfoAction.rejected, (state) => {
      state.isLoading = false;
    });

    // Recipe Random Cases
    builder.addCase(getRandomRecipesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRandomRecipesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipesAll = action.payload;
    });
    builder.addCase(getRandomRecipesAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const { reducer } = recipeSlice;
export default reducer;
