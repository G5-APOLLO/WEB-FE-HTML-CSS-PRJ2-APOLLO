import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart.slice";

//Aqui estan definidos el reducer de cada pagina
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
