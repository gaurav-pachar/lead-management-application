import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    leadsData: [],
    filteredData: [],
    filterParams: ["all"]
 };

export const leadsTableDataSlice = createSlice({
    name: "leadsData",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.leadsData = [ ...action.payload ]
        },
        removeData: (state) => {
            state.leadsData = [
      
            ]
        },
        updateData: (state, action) => {
            const leadsDataInState = [...action.payload.allLeads];
            const leadsDataFiltered = leadsDataInState.filter((item) => {
              //  console.log(item);
                return (item.SK !== action.payload.updatedLead.SK);
            })
            leadsDataFiltered.push(action.payload.updatedLead);
            state.leadsData = [...leadsDataFiltered];
        },
        addParams: (state, action) => {
           // console.log(state);
            const defaultRemoved = state.filterParams.filter((item) => {return (item !== "all")});
           // console.log(defaultRemoved);
            const filterParamsToAdd = [...defaultRemoved];
            if (filterParamsToAdd.includes(action.payload)) {
             //   console.log("params persists in the array");
                state.filterParams = [
                    ...filterParamsToAdd
                ]
            } else {
                state.filterParams = [
                    ...filterParamsToAdd, action.payload
                ]
            }
        },
        removeParams: (state, action) => {
            //const filterParamsNow = [...state.filterParams];
            const filterParamsToSet = state.filterParams.filter((item) => {return (item !== action.payload)});
            state.filterParams = [...filterParamsToSet]
        },
        setDefault: (state) => {
            //const filterParamsNow = [...state.filterParams];
            state.filterParams = ["all"];
        },
        addFilteredData: (state, action) => {
            //const filterParamsNow = [...state.filterParams];
            state.filteredData = [...action.payload];
        },
    }
})

export const { addData, removeData, updateData, addParams, removeParams, setDefault, addFilteredData } = leadsTableDataSlice.actions

export default leadsTableDataSlice.reducer
