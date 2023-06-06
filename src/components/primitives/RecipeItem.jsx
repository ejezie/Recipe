import React from 'react';
import { bannerbackground } from 'assets/images';
import { useDispatch, useSelector } from 'react-redux'; 
import { getRecipeInfoAction } from 'redux/slice/recipes.slice';

const RecipeItem = ({ id }) => {

    const dispatch = useDispatch();
    const {isLoading, recipesAll} = useSelector(state => state.recipes)

    React.useEffect(() => {
        dispatch(getRecipeInfoAction(id));
    })
    
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{"foodType"}</span>
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={bannerbackground} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{"title"}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{"description"}</p>
            </div>
        </div>
    )
}

export default RecipeItem
