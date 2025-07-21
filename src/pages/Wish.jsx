import { useSelector } from "../storeHook.js";
import WishItem from "../Componetns/WishItem.jsx";

export default function Wish() {
  //   const cartItems = [
  //     {
  //       id: 1,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       quantity: 1,
  //       rating: 3.9,
  //       price: 109.95,
  //     },
  //     {
  //       id: 2,
  //       title: "Mens Cotton Jacket",
  //       imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //       quantity: 1,
  //       rating: 4.7,
  //       price: 55.99,
  //     },
  //     {
  //       id: 3,
  //       title: "Mens Casual Slim Fit",
  //       imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //       quantity: 1,
  //       rating: 2.1,
  //       price: 15.99,
  //     },
  //   ];
  //   console.log(cartItems);
  const wishItems = useSelector((state) => state.wishList);
  // console.log(wishItems);

  return (
    <div className="cart-container">
      <h2>Items in Your WishList</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {wishItems.map(
          ({ productId, title, rating, price, image, quantity }) => (
            <WishItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              image={image}
              rating={rating}
              quantity={quantity}
            />
          )
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            $
            {wishItems.reduce(
              (accumulator, currentItem) =>
                accumulator + currentItem.price * currentItem.quantity,
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
