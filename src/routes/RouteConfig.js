import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "pages/Home";
import RecipeDetails from "components/blocks/RecipeDetails";

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default RouteConfig;
