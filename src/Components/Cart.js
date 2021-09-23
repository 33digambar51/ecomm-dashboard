import { createContext, useEffect, useReducer } from "react";
import ContextCart from "./ContextCart";
import products from "./Products";
import {reducer} from "./Reducer";
//context API => Direct sent Products to ContextCart component.
export const CartContext = createContext();

const initialState = {
    item: products,
    totalItem: 0,
    upprice:0,
    totalAmount: 0,
};
// function reducer(state, action) {
//     if (action.type === "REMOVE_ITEM") {
//         return{
//             ...state,
//             item: state.item.filter((ele) => {
//                 return ele.id !== action.payload;
//             }),
//         }
//     }
//     return state;
// }
function Cart() {
    // Now we wil use useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the indv. elements from an Item Cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };
    // clear the cart
    const clearCart = () =>{
        return dispatch({
            type: "CLEAR_CART",
        });
    };
     // increment the item
     const increment = (id) =>{
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
     };
     // decrement the item
     const decrement = (id) =>{
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
     };
      // we will use the useEffect to update the data
      useEffect(()=> {
          dispatch({type: "GET_TOTAL"});
          console.log("Get Total");
      },[state.item]);

    return (
        <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
            <ContextCart />
        </CartContext.Provider>
    );
}
export default Cart;