import React from "react";
import Banner from "components/blocks/Banner";
import Recipes from "components/blocks/Recipes";
import Footer from "components/blocks/Footer";

const Home = () => {
  const [ingredients, setIngredients] = React.useState("");
  return (
    <>
      <Banner setIngredients={setIngredients}/>
      <Recipes ingredients={ingredients}/>
      <Footer />
    </>
  );
};

export default Home;
