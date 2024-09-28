const initialCart = {
  cart: [],
};

const cartReducer = (state = initialCart, action) => {
    console.log(action);
  switch (action.type) {
    case "add_to_cart":
      return {
        cart: [...state.cart, action.data],
      };
    default:
      return state;
  }
};

export { cartReducer };
