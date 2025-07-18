export const CART_ADD_ITEM = "Cart/addItem";
export const REMOVE_ITEM = "Cart/removeItem";
export const CART_INCREASE_QUANTITY = "Cart/increaseQuantity";
export const CART_DECREASE_QUANTITY = "Cart/decreaseQuantity";

//* action creaters
export function decreaseItemQuantity(productId) {
  console.log(productId);
  return {
    type: CART_DECREASE_QUANTITY,
    payload: { productId: productId },
  };
}

export function increaseItemQuantity(productId) {
  console.log(productId);
  return {
    type: CART_INCREASE_QUANTITY,
    payload: { productId: productId },
  };
}
export function addtocart(productData) {
  console.log(productData);
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
}
export function removeItemfromcart(id, quantity) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId: id, quantity: quantity },
  };
}

export function CartReducer(state = [], action) {
  // console.log(state);
  switch (action.type) {
    case CART_ADD_ITEM: {
      const existingItem = state.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem) {
        return state.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    case CART_INCREASE_QUANTITY:
      return state.map((cart) => {
        console.log(cart);
        if (cart.productId === action.payload.productId) {
          return { ...cart, quantity: cart.quantity + 1 };
        }
        return cart;
      });

    case CART_DECREASE_QUANTITY:
      return state
        .map((cartitem) => {
          if (cartitem.productId === action.payload.productId) {
            return { ...cartitem, quantity: cartitem.quantity - 1 };
          }
          return cartitem;
        })
        .filter((cartitem) => cartitem.quantity > 0);

    default:
      return state;
  }
}

const allfunction = {
  increaseItemQuantity,
  decreaseItemQuantity,
};

export default CartReducer;
export { allfunction };
