import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    leadsCountData: [],
    filteredDatesData: [],
    filterDaysParam: 0
 };

export const leadsCountDataSlice = createSlice({
    name: "leadsCount",
    initialState,
    reducers: {
        addCountData: (state, action) => {
            state.leadsCountData = [ ...action.payload ]
        },
        removeCountData: (state) => {
            state.leadsCountData = []
        },
        addDaysParam: (state, action) => {
            state.filterDaysParam = action.payload
        },
        setDefaultDays: (state) => {
            state.filterDaysParam = 0
        },
        addFilteredDateData: (state, action) => {
         //   console.log(action)
            state.filteredDatesData = [...action.payload]
        },
    }
})

export const { addCountData, removeCountData, addDaysParam, setDefaultDays, addFilteredDateData } = leadsCountDataSlice.actions;

export default leadsCountDataSlice.reducer;
