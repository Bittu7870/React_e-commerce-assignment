import CombineRoute from "./Route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {
  const allRoutes = CombineRoute();

  return (
    <Router>
      <Routes>
        {allRoutes?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;
