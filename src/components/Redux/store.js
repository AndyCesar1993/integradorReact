import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  productSlice  from "./productsSice";
import shopSlice from "./shopSlice";
import userSlice from "./userSlice";
import succesfulMessageSlice from "./succesfulMessageSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    products:productSlice,
    shop:shopSlice,
    users:userSlice,
    succesfuldMessage: succesfulMessageSlice
});

const persistConfig={
    key:'root',
    storage,
    whitelist:['shop','users']
}

const persistedReducer = persistReducer(persistConfig,reducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
});

export const persistor = persistStore(store);