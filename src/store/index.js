import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice"
import reductorDelShop from "../features/Shop/ShopSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from '../services/shopService';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorDelShop,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(shopApi.middleware)
    }
})

setupListeners(store.dispatch)

export default store