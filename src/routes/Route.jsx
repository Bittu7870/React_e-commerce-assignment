import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Cloths from "../pages/Cloths";
import Accessories from "../pages/Accessories";
import ForgatPassword from "../pages/Auth/ForgatPassword";
import AuthPage from "../pages/AuthPage";
import NoPage from "../pages/NoPage";
import Cart from "../pages/Cart";

const CombineRoute = () => {
  return [
    {
      path: "/home",
      element: <PrivateRoute component={Home} />,
    },
    {
      path: "/cloths",
      element: <PrivateRoute component={Cloths} />,
    },
    {
      path: "/accessories",
      element: <PrivateRoute component={Accessories} />,
    },
    {
      path: "/forget-password",
      element: <PublicRoute component={ForgatPassword} />,
    },
    {
      path: "/",
      element: <PublicRoute component={AuthPage} />,
    },
    {
      path: "/*",
      element: <PrivateRoute component={NoPage} />,
    },
    {
      path: "/cart",
      element: <PrivateRoute component={Cart} />,
    },
  ];
};

export default CombineRoute;
