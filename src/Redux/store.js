import { configureStore } from '@reduxjs/toolkit';
import UIReducer from 'Redux/reduxSlices/UIStateSlice';
import userDetailsReducer from 'Redux/reduxSlices/userDetailSlice';
import leadsCountDataReducer from 'Redux/reduxSlices/leadsCountDataSlice';
export const store = configureStore({
  reducer: {
    UIState: UIReducer,
    userDetails: userDetailsReducer,
    leadsCountData: leadsCountDataReducer
  },
})