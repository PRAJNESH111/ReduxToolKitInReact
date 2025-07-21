import React from "react";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemfromcart,
} from "../store/CartReducre";
import { useDispatch } from "../storeHook";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  image,
  quantity,
}) {
  console.log(productId);
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
          onClick={() => {
            dispatch(decreaseItemQuantity({ productId }));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(increaseItemQuantity({ productId }));
          }}
        >
          +
        </button>
        <button onClick={() => dispatch(removeItemfromcart({ productId }))}>
          Remove
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
