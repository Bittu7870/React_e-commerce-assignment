import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Country, State, City } from "country-state-city";
import { IsdCode } from "../../ISDcode";
import { toast } from "react-toastify";

const SignupPage = ({ currentTab }) => {
  const [accountType, setAccountType] = useState("individual");
  const [fname, setFname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [ISDCode, setISDCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fax, setFax] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [allCountry, setAllCountry] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  // console.log(Country.getAllCountries());
  // console.log(State.getAllStates());
  // console.log(City.getAllCities());

  useEffect(() => {
    const AllCountry = Country.getAllCountries().map((item) => item.name);
    const uniqueSortedCountry = [...new Set(AllCountry)].sort();
    setAllCountry(uniqueSortedCountry);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Validate first name
    if (!fname) {
      errors.fname = "Please enter a valid first name.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Validate address
    if (!address) {
      errors.address = "Please enter a valid address.";
    }

    // Validate country
    if (!country) {
      errors.country = "Please select a country.";
    }

    // Validate state
    if (!state) {
      errors.state = "Please select a state.";
    }

    // Validate city
    if (!city) {
      errors.city = "Please select a city.";
    }

    // Validate pin code
    if (!pinCode) {
      errors.pinCode = "Please enter valid pincode.";
    }

    // Validate ISD code
    if (!ISDCode) {
      errors.ISDCode = "Please select country code.";
    }

    // Validate phone number
    if (!phoneNumber) {
      errors.phoneNumber = "Please enter a valid phone number.";
    }

    // Validate password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.";
    }

    // Validate conform password
    if (!conformPassword) {
      errors.conformPassword = "Conform password should be same as password.";
    } else if (conformPassword !== password) {
      errors.conformPassword = "Passwords do not match.";
    }

    setFormError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    if (Object.keys(formError).length === 0) {
      const token = `${email}:${password}`;
      localStorage.setItem("token", token);
    }

    console.log("Form Submission Data", {
      accountType,
      fname,
      lastName,
      email,
      address,
      country,
      state,
      city,
      pinCode,
      ISDCode,
      fax,
      phone,
      phoneNumber,
      password,
      conformPassword,
    });

    toast.success("Signup Successfully");
    currentTab("LOGIN");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConformPassword = () => {
    setShowConformPassword(!showConformPassword);
  };

  const countryCode = (countryName) => {
    let code = "";
    for (const countryData of Country.getAllCountries()) {
      if (countryData.name === countryName) {
        code = countryData.isoCode;
        break;
      }
    }
    return code;
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    const countryIsoCode = countryCode(selectedCountry);

    const states = State.getStatesOfCountry(countryIsoCode)
      .map((item) => item.name)
      .sort();
    setAllStates(states);

    setState("");
    setCity("");
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    const countryIsoCode = countryCode(country);

    const cities = City.getCitiesOfCountry(countryIsoCode)
      .map((item) => item.name)
      .sort();
    setAllCities(cities);

    setCity("");
  };

  const ISDCodes = IsdCode.map((item) => item.dial_code);

  return (
    <form onSubmit={handleSubmit} className="signUp-section">
      <p>
        Individual/Enterprise/Government<span className="text-danger">*</span>
      </p>
      <div className="mb-3 d-flex justify-content-evenly radio-section ">
        <div className="form-check ">
          <input
            type="radio"
            id="individual"
            name="accountType"
            value="individual"
            checked={accountType === "individual"}
            onChange={(e) => setAccountType(e.target.value)}
            className="form-check-input cursor-pointer"
          />

          <label
            htmlFor="individual"
            className="form-check-label cursor-pointer"
          >
            Individual
          </label>
        </div>
        <div className="form-check cursor-pointer">
          <input
            type="radio"
            id="enterprise"
            name="accountType"
            value="enterprise"
            checked={accountType === "enterprise"}
            onChange={(e) => setAccountType(e.target.value)}
            className="form-check-input"
          />
          <label
            htmlFor="enterprise"
            className="form-check-label cursor-pointer"
          >
            Enterprise
          </label>
        </div>
        <div className="form-check cursor-pointer">
          <input
            type="radio"
            id="government"
            name="accountType"
            value="government"
            checked={accountType === "government"}
            onChange={(e) => setAccountType(e.target.value)}
            className="form-check-input cursor-pointer"
          />
          <label
            htmlFor="government"
            className="form-check-label cursor-pointer"
          >
            Government
          </label>
        </div>
      </div>
      <div className="d-flex">
        <div className="mb-3 col">
          <label htmlFor="text" className="form-label cursor-pointer">
            First Name<span className="text-danger cursor-pointer">*</span>
          </label>
          <input
            type="text"
            id="text"
            value={fname}
            placeholder="First Name"
            className={`form-control ${formError.fname && "border-danger"}`}
            style={{ width: "84%" }}
            onChange={(e) => setFname(e.target.value)}
          />
          <span className="text-danger">{formError.fname}</span>
        </div>
        <div className="mb-3 col">
          <label htmlFor="lname" className="form-label cursor-pointer">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            value={lastName}
            placeholder="Last Name"
            className="form-control"
            style={{ width: "84%" }}
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* <span className="text-danger">{formError.lastName}</span> */}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label cursor-pointer">
          Email<span className="text-danger">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email id"
          className={`form-control signUp-input ${
            formError.email && "border-danger"
          }`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="text-danger">{formError.email}</span>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label cursor-pointer">
          Address<span className="text-danger">*</span>
        </label>
        <input
          type="text"
          id="address"
          value={address}
          placeholder="Address"
          className={`form-control signUp-input ${
            formError.address && "border-danger"
          }`}
          onChange={(e) => setAddress(e.target.value)}
        />
        <span className="text-danger">{formError.address}</span>
      </div>
      <div className="d-flex">
        <div className="mb-3 col">
          <label htmlFor="country" className="form-label cursor-pointer">
            Country<span className="text-danger">*</span>
          </label>
          <select
            id="country"
            className={`form-select ${formError.country && "border-danger"}`}
            value={country}
            onChange={handleCountryChange}
            style={{ width: "84%" }}
          >
            <option value="" disabled>
              Select Country
            </option>
            {allCountry?.map((item, id) => (
              <option className="cursor-pointer" key={id} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="text-danger">{formError.country}</span>
        </div>
        <div className="mb-3 col">
          <label htmlFor="state" className="form-label cursor-pointer">
            State<span className="text-danger">*</span>
          </label>
          <select
            id="state"
            className={`form-select ${formError.state && "border-danger"}`}
            value={state}
            onChange={handleStateChange}
            style={{ width: "84%" }}
          >
            <option value="" disabled>
              Select State
            </option>
            {allStates?.map((item, id) => (
              <option className="cursor-pointer" key={id} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="text-danger">{formError.state}</span>
        </div>
      </div>
      <div className="d-flex">
        <div className="mb-3 col">
          <label htmlFor="city" className="form-label cursor-pointer">
            City<span className="text-danger">*</span>
          </label>
          <select
            id="city"
            className={`form-select ${formError.city && "border-danger"}`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ width: "84%" }}
          >
            <option value="" disabled>
              Select City
            </option>
            {allCities.map((item, id) => (
              <option className="cursor-pointer" key={id} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="text-danger">{formError.city}</span>
        </div>
        <div className="mb-3 col">
          <label htmlFor="pincode" className="form-label cursor-pointer">
            Pincode<span className="text-danger">*</span>
          </label>
          <input
            type="number"
            id="pincode"
            value={pinCode}
            placeholder="ex:110042"
            className={`form-control ${formError.pinCode && "border-danger"}`}
            style={{ width: "84%" }}
            onChange={(e) => setPinCode(e.target.value)}
          />
          <span className="text-danger">{formError.pinCode}</span>
        </div>
      </div>
      <div className="">
        <label htmlFor="mobileNumber" className="form-label cursor-pointer">
          Mobile Number<span className="text-danger">*</span>
        </label>
        <div className="mb-3 d-flex">
          <div>
            <select
              id="mobileNumber"
              className={`form-select ${formError.ISDCode && "border-danger"}`}
              value={ISDCode}
              onChange={(e) => setISDCode(e.target.value)}
            >
              <option value="" disabled>
                ISD Code
              </option>
              {ISDCodes.map((IsdCode, id) => (
                <option className="cursor-pointer" key={id} value={IsdCode}>
                  {IsdCode}
                </option>
              ))}
            </select>
            <span className="text-danger">{formError.ISDCode}</span>
          </div>
          <div style={{ flex: "1" }}>
            <input
              type="number"
              id="mobileNumberInput"
              value={phoneNumber}
              placeholder="Mobile Number"
              className={`form-control ${
                formError.phoneNumber && "border-danger"
              }`}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ width: "91%" }}
            />
            <span className="text-danger">{formError.phoneNumber}</span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="mb-3 col">
          <label htmlFor="fax" className="form-label cursor-pointer">
            Fax
          </label>
          <input
            type="number"
            id="fax"
            value={fax}
            placeholder="011-55541234"
            className="form-control"
            style={{ width: "84%" }}
            onChange={(e) => setFax(e.target.value)}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="phone" className="form-label cursor-pointer">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            placeholder="011-55541234"
            className="form-control"
            style={{ width: "84%" }}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 password-input-container">
        <label htmlFor="password" className="form-label cursor-pointer">
          Password<span className="text-danger">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          className={`form-control signUp-input ${
            formError.password && "border-danger"
          }`}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password-icons" onClick={handleTogglePassword}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
        <span className="text-danger">{formError.password}</span>
      </div>
      <div className="mb-3 password-input-container">
        <label htmlFor="conformPassword" className="form-label cursor-pointer">
          Conform Password<span className="text-danger">*</span>
        </label>
        <input
          type={showConformPassword ? "text" : "password"}
          id="conformPassword"
          value={conformPassword}
          className={`form-control signUp-input ${
            formError.conformPassword && "border-danger"
          }`}
          onChange={(e) => setConformPassword(e.target.value)}
        />
        <div className="password-icons" onClick={handleToggleConformPassword}>
          {showConformPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
        <span className="text-danger">{formError.conformPassword}</span>
      </div>
      <div className="mb-5">
        <button type="submit" className="button mt-4">
          SIGNUP
        </button>
      </div>
    </form>
  );
};

export default SignupPage;
