import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SideBar: {
        sideBarOpen: false,
        sideBarExpanded: false
    }
 };

export const UIStateSlice = createSlice({
    name: "UIState",
    initialState: initialState,
    reducers: {
        open: (state) => {
            state.SideBar.sideBarOpen = true
        },
        close: (state) => {
            state.SideBar.sideBarOpen = false
        },
        expand: (state) => {
            state.SideBar.sideBarExpanded = true
        },
        shrink: (state) => {
            state.SideBar.sideBarExpanded = false
        }
    }
})

export const { open, close, expand, shrink } = UIStateSlice.actions

export default UIStateSlice.reducer