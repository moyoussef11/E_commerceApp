import { createSlice } from "@reduxjs/toolkit";

interface ICart {
    id: number,
    title: string,
    price: number,
    cat_prefix: string,
    img: string,
    quantity:number
}
interface ICarts {
    cart:ICart[]
}
const initialState: ICarts = {
    cart:[],
}



export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findCart = state.cart.find((item) => item.id === action.payload.id);
            const item = { ...action.payload, quantity: 1 };
            if (findCart){
                findCart.quantity += 1;                
            } else {
                state.cart.push(item);
            }            
        },
        deleteFromCart: (state, action) => {                        
            return {cart:state.cart.filter((item) => item.id !== action.payload) }
        },
        incrementQuantity: (state, action) => {
            const findCart = state.cart.find((item) => item.id === action.payload);
            if (findCart) {
                findCart.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const findCart = state.cart.find((item) => item.id === action.payload);
            if (findCart) {
                if (findCart.quantity == 1) {
                    findCart.quantity = 1;
                } else {
                    findCart.quantity -= 1;
                }
            }
        },
        Clear: () => {
            return { cart: [] };
        }
    }
})

export const { addToCart,deleteFromCart,incrementQuantity,decrementQuantity,Clear } = cartSlice.actions;
export default cartSlice.reducer;