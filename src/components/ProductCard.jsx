import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const ProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ item: item, quantity: quantity }));
  };

  return (
    <div className="card card-size d-flex flex-column shadow">
      <div className="img-container flex-grow-1">
        <img
          src={item.image}
          className="card-img-top img-size img-fluid zoom-img"
          alt="product-Img"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.category}</p>
        <p className="price">Rs {item.price}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="btn btn-outline-primary">{quantity}</span>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-sm mt-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
