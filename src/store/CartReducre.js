// export const CART_ADD_ITEM = "Cart/addItem";
// export const REMOVE_ITEM = "Cart/removeItem";
// export const CART_INCREASE_QUANTITY = "Cart/increaseQuantity";
// export const CART_DECREASE_QUANTITY = "Cart/decreaseQuantity";

// import { createSlice } from "@reduxjs/toolkit";
// import { produce } from "immer";

// //* action creaters
// export function decreaseItemQuantity(productId) {
//   console.log(productId);
//   return {
//     type: CART_DECREASE_QUANTITY,
//     payload: { productId: productId },
//   };
// }

// export function increaseItemQuantity(productId) {
//   console.log(productId);
//   return {
//     type: CART_INCREASE_QUANTITY,
//     payload: { productId: productId },
//   };
// }
// export function addtocart(productData) {
//   console.log(productData);
//   return {
//     type: CART_ADD_ITEM,
//     payload: productData,
//   };
// }
// export function removeItemfromcart(id, quantity) {
//   return {
//     type: CART_ADD_ITEM,
//     payload: { productId: id, quantity: quantity },
//   };
// }

// export function CartReducer(state = [], action) {
//   // console.log(state);
//   switch (action.type) {
//     case CART_ADD_ITEM: {
//       const existingItem = state.find(
//         (item) => item.productId === action.payload.productId
//       );

//       if (existingItem) {
//         return state.map((item) =>
//           item.productId === action.payload.productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...state, { ...action.payload, quantity: 1 }];
//     }

//     case REMOVE_ITEM:
//       return state.filter(
//         (item) => item.productId !== action.payload.productId
//       );

//     case CART_INCREASE_QUANTITY:
//       return state.map((cart) => {
//         console.log(cart);
//         if (cart.productId === action.payload.productId) {
//           return { ...cart, quantity: cart.quantity + 1 };
//         }
//         return cart;
//       });

//     case CART_DECREASE_QUANTITY:
//       return state
//         .map((cartitem) => {
//           if (cartitem.productId === action.payload.productId) {
//             return { ...cartitem, quantity: cartitem.quantity - 1 };
//           }
//           return cartitem;
//         })
//         .filter((cartitem) => cartitem.quantity > 0);

//     default:
//       return state;
//   }
// }

// const allfunction = {
//   increaseItemQuantity,
//   decreaseItemQuantity,
// };

// export default CartReducer;
// export { allfunction };

//&&&&& immer js and redux toolkit

// import { createSlice } from "@reduxjs/toolkit";
// import { produce } from "immer";

// export const CART_ADD_ITEM = "Cart/addItem";
// export const REMOVE_ITEM = "Cart/removeItem";
// export const CART_INCREASE_QUANTITY = "Cart/increaseQuantity";
// export const CART_DECREASE_QUANTITY = "Cart/decreaseQuantity";

// //* action creaters
// export function decreaseItemQuantity(productId) {
//   console.log(productId);
//   return {
//     type: CART_DECREASE_QUANTITY,
//     payload: { productId: productId },
//   };
// }

// export function increaseItemQuantity(productId) {
//   console.log(productId);
//   return {
//     type: CART_INCREASE_QUANTITY,
//     payload: { productId: productId },
//   };
// }
// export function addtocart(productData) {
//   console.log(productData);
//   return {
//     type: CART_ADD_ITEM,
//     payload: productData,
//   };
// }
// export function removeItemfromcart(id, quantity) {
//   return {
//     type: REMOVE_ITEM,
//     payload: { productId: id, quantity: quantity },
//   };
// }

// function CartReducer(originalstate = [], action) {
//   // console.log(state);
//   return produce(originalstate, (state) => {
//     const existingItemIndex = state.findIndex(
//       (item) => item.productId === action.payload.productId
//     );
//     console.log(existingItemIndex);
//     switch (action.type) {
//       case CART_ADD_ITEM:
//         if (existingItemIndex !== -1) {
//           state[existingItemIndex].quantity += 1;
//           break;
//         } else {
//           state.push({ ...action.payload, quantity: 1 });
//         }
//         break;
//       case REMOVE_ITEM:
//         state.splice(existingItemIndex, 1);
//         break;

//       case CART_INCREASE_QUANTITY:
//         state[existingItemIndex].quantity += 1;
//         break;

//       case CART_DECREASE_QUANTITY:
//         state[existingItemIndex].quantity -= 1;
//         if (state[existingItemIndex].quantity <= 0) {
//           state.splice(existingItemIndex, 1);
//         }
//         break;
//     }
//     return state;
//   });
// }

// // const allfunction = {
// //   increaseItemQuantity,
// //   decreaseItemQuantity,
// // };

// // export default CartReducer;
// // export { allfunction };
// const finIndex = (state, action) =>
//   state.findIndex((item) => item.productId === action.payload.productId);
// const slice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addItem(state, action) {
//       let existingItemIndex = finIndex(state, action);
//       if (existingItemIndex !== -1) {
//         state[existingItemIndex].quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeItem(state, action) {
//       let existingItemIndex = finIndex(state, action);
//       state.splice(existingItemIndex, 1);
//     },
//     increaseQuantity(state, action) {
//       let existingItemIndex = finIndex(state, action);
//       state[existingItemIndex].quantity += 1;
//     },
//     decreaseQuantity(state, action) {
//       let existingItemIndex = finIndex(state, action);
//       state[existingItemIndex].quantity -= 1;
//       if (state[existingItemIndex].quantity <= 0) {
//         state.splice(existingItemIndex, 1);
//       }
//     },
//   },
// });

// export const { addItem, decreaseQuantity, increaseQuantity, removeItem } =
//   slice.actions;
// export default CartReducer;

import { createSlice } from "@reduxjs/toolkit";

const findIndex = (state, productId) =>
  state.findIndex((item) => item.productId === productId);

const slice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addtocart(state, action) {
      const index = findIndex(state, action.payload.productId);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemfromcart(state, action) {
      const index = findIndex(state, action.payload.productId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    increaseItemQuantity(state, action) {
      const index = findIndex(state, action.payload.productId);
      if (index !== -1) {
        state[index].quantity += 1;
      }
    },
    decreaseItemQuantity(state, action) {
      const index = findIndex(state, action.payload.productId);
      if (index !== -1) {
        state[index].quantity -= 1;
        if (state[index].quantity <= 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const {
  addtocart,
  removeItemfromcart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = slice.actions;

// console.log(addtocart.type);
export default slice.reducer;
