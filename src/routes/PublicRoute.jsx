// import { useNavigate } from "react-router-dom";

const PublicRoute = ({ component: Component }) => {
  const user = localStorage.getItem("token");
  // const navigate = useNavigate();
  if (!user) {
    return (
      <>
        <Component />
      </>
    );
  }
};

export default PublicRoute;
