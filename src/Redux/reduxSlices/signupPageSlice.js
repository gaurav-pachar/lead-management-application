import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    verifyingCode: false,
    user: {
        name: "",
        password: ""
    }
 };

export const signupPageSlice = createSlice({
    name: "signUpPage",
    initialState,
    reducers: {
        show: (state, action) => {
            state.verifyingCode = true;
            state.user = action.payload
        },
        hide: (state) => {
            state.verifyingCode = false;
            state.user = {
                name: "",
                password: ""
            }
        }
    }
})

export const { show, hide } = signupPageSlice.actions

export default signupPageSlice.reducer