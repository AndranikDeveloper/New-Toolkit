import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import userReducer from './reducer/User.slice'
import { postAPI } from "../services/PostServices";


const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postAPI.middleware)
        },
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']