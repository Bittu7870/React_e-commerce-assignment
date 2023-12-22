import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart);
  console.log("cartItem:", cartItem);
  const cartItems = cartItem.cart.cart;

  if (!cartItems || cartItems.length === 0) {
    navigate("/home");
    return null;
  }

  return (
    <Layout>
      <div className="cart-page">
        <div className="cart-items-container">
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
        </div>
        <CartSummary />
      </div>
    </Layout>
  );
};

export default Cart;
