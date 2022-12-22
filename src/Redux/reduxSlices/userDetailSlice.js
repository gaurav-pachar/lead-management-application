import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {
        companyName: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        stripeCustomerId: "",
        subscriptionPlan: "",
        valuationLink: ""
    }
 };

export const userDetailSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        add: (state, action) => {
            state.userDetails = action.payload
        },
        remove: (state) => {
            state.userDetails = {
                companyName: "",
                email: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                stripeCustomerId: "",
                subscriptionPlan: "",
                valuationLink: ""
            }
        }
    }
})

export const { add, remove } = userDetailSlice.actions

export default userDetailSlice.reducer

/*
companyName: ""
email: ""
firstName: ""
lastName: ""
phoneNumber: ""
stripeCustomerId: ""
subscriptionPlan: ""
valuationLink: ""
*/