const initialState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartData.find(
        (item) => item.id === action.movie.id
      );

      if (existingItem) {
        return {
          cartData: state.cartData.map((item) =>
            item.id === action.movie.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cartData: [...state.cartData, { ...action.movie, quantity: 1 }],
        };
      }
    }

    case "REMOVE_FROM_CART":
      return {
        cartData: state.cartData.filter((item) => item.id !== action.itemId),
      };

    case "INCREMENT_QUANTITY":
      return {
        cartData: state.cartData.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        cartData: state.cartData.map((item) =>
          item.id === action.itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      throw new Error("Unknown action: " + action.type);
  }
};

export { cartReducer, initialState };

