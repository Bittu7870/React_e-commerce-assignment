import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `${email}:${password}`;
    const storedToken = localStorage.getItem("token");
    const errors = {};
    if (token !== storedToken) {
      errors.error = "Please enter valid email and password";
    } else {
      navigate("/home");
    }
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }
    toast.success("Login Successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="login-section">
      <span className="text-danger">{formError.error}</span>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email<span className="text-danger">*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email id"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 password-input-container ">
        <label htmlFor="password" className="form-label">
          Password<span className="text-danger">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="password-icons" onClick={handleTogglePassword}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </div>
      <div className="mb-3 text-end">
        <Link to="/forget-password" className="link-reset">
          Reset Password
        </Link>
      </div>
      <div>
        <button type="submit" className="button" disabled={!email || !password}>
          LOG ME IN
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
