import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import heartIcon from "../assets/heart-icon copy.svg";
import { useSelector } from "../storeHook";

export default function Header() {
  const cartsize = useSelector((state) => state.cart);
  const wishsize = useSelector((state) => state.wishList);
  console.log(wishsize);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Kammida Store</Link>
        </h1>
        <div className="heart">
          <Link className="wish-icon" to="/wish">
            <img src={heartIcon} alt="cart-icon" />
            <div className="wish-items-count">
              {wishsize.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity,
                0
              )}
            </div>
          </Link>
        </div>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartsize.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
