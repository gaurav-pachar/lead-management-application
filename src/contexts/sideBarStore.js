import React, { useReducer, createContext } from "react";

const initialState = {
     sideBarOpen: false
  };

export const sideBarOpenContext = createContext();

const reducer = (state, action) => {
 // console.log('this is sate in reducer:',state);
    switch (action.type) {
        case "open":
        return {
            ...state,
            sideBarOpen: true
          }
        case "close":
        return {
            ...state,
            sideBarOpen: false
          }
        default:
        throw new Error(`Unknown action: ${action.type}`);
    }
}

export const openSideBar = (dispatch) => {
    return dispatch({
      type: "open"
    });
  };

export const closeSideBar = (dispatch) => {
    return dispatch({
      type: "close"
    });
  };

const SideBarStateProvider = ({ children }) => {
    const persistedGridsState = {
        sideBarOpen: false
    };
    const [state, dispatch] = useReducer(reducer, persistedGridsState);
    return (
      <sideBarOpenContext.Provider value={[state, dispatch]}>
          {children}
      </sideBarOpenContext.Provider>
    );
  };
  
  export default SideBarStateProvider;