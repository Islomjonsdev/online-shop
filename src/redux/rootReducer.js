const initialCart = {
  cart: [],
};

const initialCartLike = {
  likeCart: [],
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

const likeReducer = (state = initialCartLike, action) => {
  console.log(action, "like action");
  switch (action.type) {
    case "add_to_like":
      return {
        likeCart: [...state.likeCart, action.data],
      };
    default:
      return state;
  }
};

export { cartReducer, likeReducer };
