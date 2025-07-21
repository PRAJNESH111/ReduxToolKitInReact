export const WISHLIST_ADD_ITEM = "WishList/addItem";
export const WISHLIST_REMOVE_ITEM = "WishList/removeItem";
export function addWishlist(productData) {
  // console.log(productData);
  return {
    type: WISHLIST_ADD_ITEM,
    payload: productData,
  };
}
export function removeWishlist(id) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId: id },
  };
}
export default function WishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM: {
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
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    default:
      return state;
  }
}
