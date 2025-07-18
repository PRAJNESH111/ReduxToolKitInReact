import { useContext } from "react";
import StoreContext from "./StoreContext";

export const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch;
};

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  return selector(store.state);
};
