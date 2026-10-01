import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import profitReducer from "./profitSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        profit: profitReducer, 
    },
});