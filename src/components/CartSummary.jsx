import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log("Cart value", cartItems.cart);

  const totalItems = cartItems.cart.cart.length;

  const CONVENIENCE_FEES = 99;
  let totalMRP = 0;
  let totalDiscount = 0;

  cartItems.cart.cart.forEach((items) => {
    const { item, quantity } = items;
    totalMRP += item.price * quantity;
    totalDiscount += 100 - item.price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="cart-summary">
      <div className="cart-details-container">
        <div className="price-header">PRICE DETAILS ({totalItems} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP.toFixed(2)}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            - ₹{Math.round(totalDiscount)}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment.toFixed(2)}</span>
        </div>
      </div>
      <button className="btn-place-order ">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default CartSummary;
