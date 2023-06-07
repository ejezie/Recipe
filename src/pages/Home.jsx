import React from "react";
import Banner from "components/blocks/Banner";
import Recipes from "components/blocks/Recipes";

const Home = () => {
  const [ingredients, setIngredients] = React.useState("");
  return (
    <>
      <Banner setIngredients={setIngredients}/>
      <Recipes ingredients={ingredients}/>
    </>
  );
};

export default Home;
