import Product from "./Componetns/product";
import "./App.css";
// import { productlist } from "./store/product";
// import { useSelector } from "./react-redux.js";
import { Outlet } from "react-router-dom";
import Header from "./Componetns/Header";
// import { store } from "./store/script";
const App = () => {
  // console.log(store.getState().product);
  // const productlist = useSelector((state) => state.product);
  // console.log(productlist);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
