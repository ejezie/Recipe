import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store.js";
import Banner from "components/blocks/Banner";
import Recipes from "components/blocks/Recipes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Banner />
        <Recipes />
      </div>
    </Provider>
  );
}

export default App;
