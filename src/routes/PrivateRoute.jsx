import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  if (user) {
    return (
      <>
        <Component />
      </>
    );
  } else {
    navigate("/");
  }
};

export default PrivateRoute;
