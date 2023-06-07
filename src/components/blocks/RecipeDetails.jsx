import React from "react";
import { useSelector } from "react-redux";
import formatText from "utils/formatText";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams();

  const { isLoading, recipesInfo } = useSelector((state) => state.recipes);
  const data = recipesInfo[id];

  const shareOnFacebook = () => {
    // Check if the Facebook SDK is loaded
    if (window.FB) {
      // Open the Share Dialog
      window.FB.ui({
        method: "share",
        href: "https://example.com/recipe-url", // Replace with the actual recipe URL
      });
    }
  };

  const shareOnTwitter = () => {
    const recipeUrl = "https://example.com/recipe-url"; // Replace with the actual recipe URL

    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=Check out this recipe!&url=${encodeURIComponent(
      recipeUrl
    )}`;

    window.open(twitterIntentUrl, "_blank");
  };

  const shareOnPinterest = () => {
    // Check if the Pinterest SDK is loaded
    if (window.PinUtils) {
      // Trigger the save action
      window.PinUtils.pinOne({
        url: "https://example.com/recipe-url", // Replace with the actual recipe URL
        media: "https://example.com/recipe-image.jpg", // Replace with the actual recipe image URL
        description: "Check out this recipe!", // Replace with the recipe description
      });
    }
  };

  React.useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "your-facebook-app-id",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v13.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    // Load Pinterest SDK
    (function (d) {
      var f = d.getElementsByTagName("SCRIPT")[0],
        p = d.createElement("SCRIPT");
      p.type = "text/javascript";
      p.async = true;
      p.src = "//assets.pinterest.com/js/pinit.js";
      f.parentNode.insertBefore(p, f);
    })(document);
  }, []);

  return (
    <div className="bg-white shadow-xl rounded-lg p-6">
      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <HashLoader color="#374151" />
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-lg flex flex-grow">
            <img
              className="w-full h-auto transform transition duration-700 hover:scale-125"
              src={data?.image}
              alt={data?.title}
            />
          </div>
          <div className="mt-6">
            <h1 className="text-3xl text-gray-800 font-bold">{data?.title}</h1>
            <p className="text-sm text-gray-500 mt-2">
              {formatText(data?.summary, 500)}
            </p>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <button
              className="flex items-center justify-center p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
              onClick={shareOnFacebook}
            >
              <FaFacebook className="text-lg mr-2" />
              Share on Facebook
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300"
              onClick={shareOnTwitter}
            >
              <FaTwitter className="text-lg mr-2" />
              Share on Twitter
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
              onClick={shareOnPinterest}
            >
              <FaPinterest className="text-lg mr-2" />
              Pin it
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
