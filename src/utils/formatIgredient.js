const formatIngredient = (value) => {
    const ingredients = value.split(/[, ]+/).map((ingredient, idx) => {
      return idx === 0 ? ingredient.trim() : "+" + ingredient.trim();
    });

    const formattedIngredients = ingredients.join(",");
    return formattedIngredients;
  };

export default formatIngredient;