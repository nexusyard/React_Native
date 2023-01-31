import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import colorsSlice from "./colorsSlice";

import persistReducer from "redux-persist/lib/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig ={
    key: 'key',
    storage: AsyncStorage
}

const persistedReducers = persistReducer(persistConfig, colorsSlice);

export const store = configureStore({
    reducer: {
        themeColor : persistedReducers
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false})
});
