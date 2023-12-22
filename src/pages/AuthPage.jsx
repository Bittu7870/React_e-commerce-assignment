import { useState } from "react";
import LoginPage from "./Auth/LoginPage";
import SignupPage from "./Auth/SignupPage";

const AuthPage = () => {
  const tabsName = ["LOGIN", "SIGNUP"];
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  return (
    <>
      <div className="topBar"></div>
      <div className="mt-5 tab-content d-flex">
        {tabsName.map((element, index) => (
          <div
            key={index}
            onClick={() => setCurrentTab(element)}
            className={`tab-section rounded-pill ${
              currentTab === element
                ? "bgColor text-white"
                : "bg-white text-black"
            }`}
          >
            {element}
          </div>
        ))}
      </div>
      <div className="tab-body">
        {currentTab === "LOGIN" ? <LoginPage /> : <SignupPage currentTab={setCurrentTab}/>}
      </div>
    </>
  );
};

export default AuthPage;
