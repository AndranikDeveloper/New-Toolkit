import axios from "axios";
import { AppDispatch } from "../store";
import { IUserState } from "../../module/IUser";
import { userSlice } from "./User.slice";
import {createAsyncThunk} from '@reduxjs/toolkit'


// export const fetchUser = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUserState[]>(`https://jsonplaceholder.typicode.com/users`)
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))   
//     } catch (error) {
//         dispatch(userSlice.actions.usersFetchingError('SOME ERROR'))
//     }  
// }   


export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUserState[]>(`https://jsonplaceholder.typicode.com/users`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Something Went Wrong")
        }
    }
)