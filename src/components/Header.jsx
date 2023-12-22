import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

import { Link } from "react-router-dom";
import UserDropdown from "./Profile";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem = useSelector((state) => state.cart);

  console.log("card from local", cartItem.cart.cart);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/home"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <h2>
              <span className="logo">SHOP</span>LANE
            </h2>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/home" className="nav-link px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cloths" className="nav-link px-2">
              CLOTHINGS
            </Link>
          </li>
          <li>
            <Link to="/accessories" className="nav-link px-2">
              ACCESSORIES
            </Link>
          </li>
        </ul>

        <div className="col-md-3 d-flex justify-content-end text-end right">
          <TbSearch />
          <span className="px-4 cart-icons">
            {cartItem.cart.cart && cartItem.cart.cart.length > 0 ? (
              <Link to="/cart">
                <CgShoppingCart />
              </Link>
            ) : (
              <CgShoppingCart />
            )}
            <span className="bg-primary">
              {cartItem.cart.cart ? cartItem.cart.cart.length : 0}
            </span>
          </span>
          <UserDropdown />
        </div>
      </header>
    </div>
  );
};

export default Header;
