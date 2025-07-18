import { addtocart } from "../store/CartReducre";
import { addWishlist } from "../store/WishListReducre";
import { useDispatch } from "../storeHook";

function Product({ productId, title, rating, price, image }) {
  const dispatch = useDispatch();
  return (
    <div className="product" key={productId}>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">
          {+rating.rate} {"★".repeat(Math.floor(rating.rate))}({rating.count}{" "}
          reviews)
        </p>
        <p className="price">₹{price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() =>
            dispatch(addtocart({ productId, title, rating, price, image }))
          }
        >
          Add to Cart
        </button>
        <button
          onClick={() =>
            dispatch(addWishlist({ productId, title, rating, price, image }))
          }
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Product;
