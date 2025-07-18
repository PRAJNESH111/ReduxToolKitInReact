// import { createStore } from "redux";
// import { mycreateStore } from "./my-redux";

// let reduxval = document.querySelector(".redux");
// const state = {
//   count: 10,
// };

// function reduce(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// const mystore = mycreateStore(reduce, window);
// console.log(mystore);
// const store = createStore(
//   reduce,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// // store.subscribe(() => {
// //   console.log(store.getState(state));
// // });
// let unsucribe = mystore.subscribe(() => {
//   console.log(mystore.getState());
// });
// console.log(unsucribe);

// // store.dispatch({ type: "INCREMENT" });

// // store.dispatch({ type: "DECREMENT" });
// mystore.dispatch({ type: "INCREMENT" });
// mystore.dispatch({ type: "INCREMENT" });
// // console.log(mystore.getState());

// mystore.dispatch({ type: "DECREMENT" });
// // console.log(mystore.getState());

// console.log(reduxval);

// reduxval.addEventListener("click", () => {
//   store.dispatch({ type: "INCREMENT" });
//   reduxval.innerHTML = store.getState().count;
// });

///****** Product *** */
// import { createStore } from "redux";
// import { productlist } from "./product";

// const initialState = {
//   products: productlist,
//   cartItem: [],
//   wishList: [],
// };

// const CART_ADD_ITEM = "Cart/addItem";
// const REMOVE_ITEM = "Cart/removeItem";
// const CART_INCREASE_QUANTITY = "Cart/increaseQuantity";
// const CART_DECREASE_QUANTITY = "Cart/decreaseQuantity";
// const WISHLIST_ADD_ITEM = "WishList/addItem";
// const WISHLIST_REMOVE_ITEM = "WishList/removeItem";

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return { ...state, cartItem: [...state.cartItem, action.payload] };
//     case REMOVE_ITEM:
//       return {
//         ...state,
//         cartItem: state.cartItem.filter(
//           (item) => item.productId !== action.payload.productId
//         ),
//       };
//     case CART_INCREASE_QUANTITY:
//       return {
//         ...state,
//         cartItem: state.cartItem.map((cartitem) => {
//           if (cartitem.productId === action.payload.productId) {
//             return { ...cartitem, quantity: cartitem.quantity + 1 };
//           }
//           return cartitem;
//         }),
//       };
//     case CART_DECREASE_QUANTITY:
//       return {
//         ...state,
//         cartItem: state.cartItem
//           .map((cartitem) => {
//             if (cartitem.productId === action.payload.productId) {
//               return { ...cartitem, quantity: cartitem.quantity - 1 };
//             }
//             return cartitem;
//           })
//           .filter((cartitem) => cartitem.quantity > 0),
//       };
//     case WISHLIST_ADD_ITEM:
//       return { ...state, wishList: [...state.wishList, action.payload] };
//     case WISHLIST_REMOVE_ITEM:
//       return {
//         ...state,
//         wishList: state.wishList.filter(
//           (item) => item.productId !== action.payload.productId
//         ),
//       };
//   }
// }

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 1, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 11, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 15, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 16, quantity: 1 },
// });
// store.dispatch({
//   type: REMOVE_ITEM,
//   payload: { productId: 16 },
// });
// store.dispatch({
//   type: CART_INCREASE_QUANTITY,
//   payload: { productId: 15 },
// });
// store.dispatch({
//   type: CART_DECREASE_QUANTITY,
//   payload: { productId: 15 },
// });
// store.dispatch({
//   type: WISHLIST_ADD_ITEM,
//   payload: { productId: 15 },
// });
// store.dispatch({
//   type: WISHLIST_REMOVE_ITEM,
//   payload: { productId: 15 },
// });
// store.dispatch({
//   type: WISHLIST_ADD_ITEM,
//   payload: { productId: 15 },
// });
// store.dispatch({
//   type: CART_DECREASE_QUANTITY,
//   payload: { productId: 15 },
// });

//****Reduce the reducer */

import { combineReducers, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from // addtocart,
// removeItemfromcart,
// decreaseItemQuantity,
// increaseItemQuantity,
"./CartReducre";
import WishListReducer from // addWishlist,
// removeWishlist,
"./WishListReducre";

const reducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  wishList: WishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
// console.dir(reducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(addtocart(2, 1));
// store.dispatch(addtocart(3, 1));
// store.dispatch(addtocart(4, 1));
// store.dispatch(addtocart(5, 1));
// store.dispatch(removeItemfromcart(4));
// store.dispatch(increaseItemQuantity(15));
// store.dispatch(increaseItemQuantity(10));
// store.dispatch(addWishlist(15));
// store.dispatch(removeWishlist(15));
// store.dispatch(decreaseItemQuantity(15));
// store.dispatch(decreaseItemQuantity(10));
// store.dispatch(addWishlist(15));
