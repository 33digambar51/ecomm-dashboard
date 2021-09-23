export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((ele) => {
                return ele.id !== action.payload;
            }),
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state, item: [],
        };
    }
    if (action.type === "INCREMENT") {
        let updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return {
                    ...curElem,
                    quantity: curElem.quantity + 1,
                    //price: curElem.quantity * 2,
                }
            }
            return curElem;
        })
        return {
            ...state, item: updatedCart
        };
    }
    if (action.type === "DECREMENT") {
        let updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return {
                    ...curElem,
                    quantity: curElem.quantity - 1
                }
            }
            return curElem;
        })
            // if quantity value is 0
            .filter((curElem) => curElem.quantity !== 0);
        return {
            ...state, item: updatedCart
        }
    }
    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount, upprice} = state.item.reduce(
            (accum, currValue) => {
                let { quantity, price } = currValue;

                // For Total Item
                accum.totalItem += quantity;
                // For Total Amount
                let updatedTotalAmount = quantity * price;
                accum.totalAmount += updatedTotalAmount;
                // For Single Amount
                let singleAmount = quantity * price;
                accum.upprice = singleAmount;
                return accum;
            },
            {
                totalItem: 0,
                totalAmount: 0,
                upprice: 0,
            }
        );
        return { ...state, totalItem, totalAmount, upprice }
    }
    return state;
}