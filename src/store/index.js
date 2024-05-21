import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import reductorDelShop from "../features/Shop/ShopSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from '../services/shopService';
import cartReducer from "../features/Cart/cart.slice"
import authReducer from "../features/User/userSlice"
import { authApi } from '../services/authService';



const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorDelShop,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().
        concat(shopApi.middleware)
        .concat(authApi.middleware)
    }
})

setupListeners(store.dispatch)

export default store