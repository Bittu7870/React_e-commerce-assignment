import { useDispatch } from "react-redux";
import { deleteFromCart } from "../Redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("All Item ", item);

  const handleRemoveItem = () => {
    // dispatch(deleteFromCart(item.item.id));
    console.log("delete item", item);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.item?.image}
            className="card-img-top img-fluid"
            alt="product-Img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body align-content-center">
            <h5 className="card-title">{item.item?.title}</h5>
            <p className="card-text">{item.item?.category}</p>
            <p className="price">Rs {item.item?.price}</p>
            <p className="card-text">Quantity - {item.quantity}</p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-danger focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-lg"
                onClick={handleRemoveItem}
              >
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
