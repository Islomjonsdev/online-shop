import { combineReducers } from "redux";
import { cartReducer, likeReducer } from "./rootReducer";
const joinedReducer = combineReducers({
    joinedCart: cartReducer,
    likeCart: likeReducer
});

export default joinedReducer