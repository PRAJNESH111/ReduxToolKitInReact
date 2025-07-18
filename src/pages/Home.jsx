import React from "react";

import Product from "../Componetns/product";
import { useSelector } from "../storeHook";
// import { productlist } from "../store/product";

export default function Home() {
  const productsList = useSelector((state) => state.product);
  //   console.log(productsList);
  useSelector((state) => console.log(state));
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
}
