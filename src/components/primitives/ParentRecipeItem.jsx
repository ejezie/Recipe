import React, { lazy, Suspense } from "react";

// Lazy load the RecipeItem component
const RecipeItem = lazy(() => import("./RecipeItem"));

const ParentRecipeItem = () => {
  // Rest of the component code

  return (
    <div>
      {/* Other content */}
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeItem id={id} filters={filters} />
      </Suspense>
    </div>
  );
};

export default ParentRecipeItem;
