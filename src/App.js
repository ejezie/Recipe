import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "routes/RouteConfig";
import { Provider } from "react-redux";
import { store } from "redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "components/blocks/Footer";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="App">
        <BrowserRouter>
          <RouteConfig />
        </BrowserRouter>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
