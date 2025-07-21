// import { removeItemfromcart } from "../store/CartReducre";
import { removeWishlist } from "../store/WishListReducre";
import { useDispatch } from "../storeHook";

export default function WishItem({
  key,
  productId,
  title,
  rating,
  price,
  image,
  quantity,
}) {
  console.log(productId);
  console.log(key);
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container" key={productId}>
      <div className="cart-item">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>
            {rating.rate} {"★".repeat(Math.floor(rating.rate))} ({rating.count}{" "}
            reviews)
          </p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          //   onClick={() => {
          //     dispatch(decreaseItemQuantity(productId));
          //   }}
          disabled
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          //   onClick={() => {
          //     dispatch(increaseItemQuantity(productId));
          //   }}
          disabled
        >
          +
        </button>
        <button onClick={() => dispatch(removeWishlist(productId))}>
          Remove
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
