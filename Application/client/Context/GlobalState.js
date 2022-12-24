/***** GlobalContext.jsx *****/
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'


const initialState = {
  //stuff like columns?
  //stories
  //to do
  //in progress
  //to verify
  //boxes to go in columns?
};

// this is the object you import in any component to access state
export const GlobalContext = createContext(initialState);

// this is the provider you import in App.jsx to wrap main content in
export const GlobalProvider = ({ children }) => {
  // set up the dispatch function using your initial state and the reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);


  const toggleDarkMode = (checked) => {
    dispatch({
      type: 'Toggle_DARK_MODE',
      payload: checked,
    })
  }

  const values = {
    ...state,
    toggleDarkMode,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}