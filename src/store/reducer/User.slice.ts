import { IUserState } from "../../module/IUser";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchUser } from "./Action.Creator";

interface UserState {
    users: IUserState[],
    isLoading: boolean,
    error: string,
}

const initialState = {
    isLoading: false,
    users: [],
    error: '',
} as UserState



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },  
        usersFetchingSuccess(state, action: PayloadAction<IUserState[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },

    extraReducers: {
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUserState[]>) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        },
        [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

    },
    // extraReducers: builder => {
    //     builder.addCase(fetchUser.pending, state => {
    //         state.isLoading = true
    //     })
    //     .addCase(fetchUser.fulfilled, (state, action) => {
    //         state.isLoading = false
    //         state.users = action.payload
    //     })
    //     .addCase(fetchUser.rejected, (state, action) => {
    //         state.isLoading = false
    //         state.error = action.payload
    //     })
    
})

export default userSlice.reducer