import { combineReducers } from "redux";
import { cartReducer } from "./rootReducer";
const joinedReducer = combineReducers({
    joinedCart: cartReducer
});

export default joinedReducer