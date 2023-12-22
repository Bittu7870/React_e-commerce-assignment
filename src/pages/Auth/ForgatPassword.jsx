import { Link } from "react-router-dom";

const ForgatPassword = () => {
  return (
    <div>
      <div className="bg-primary d-flex align-items-center justify-content-center vh-100">
        <div className="bg-white rounded p-4">
          <label htmlFor="email">
            <p>Please Provide Your Register Email id to Reset Password.</p>
            <input
              type="text"
              id="email"
              placeholder="Email id"
              style={{ width: "100%" }}
            />
          </label>
          <div className="d-flex justify-content-between mt-2">
            <button
              type="button"
              className="px-4 btn btn-primary focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-sm mt-2"
            >
              Reset Password
            </button>
            <Link to="/">
              <button
                type="button"
                className="px-4 btn btn-primary focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-sm mt-2"
              >
                Login/Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgatPassword;
