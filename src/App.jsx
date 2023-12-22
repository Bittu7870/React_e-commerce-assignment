import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routing from "./routes";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
      <ToastContainer />
    </Provider>
  );
};

export default App;
