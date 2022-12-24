const initialState = {
  //stuff like columns?
  //stories
  //to do
  //in progress
  //to verify
  //boxes to go in columns?
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  const toggleDarkMode = (checked) => {
    dispatch({
      type: 'DARK_MODE',
      payload: checked,
    })
  }

  const values = {
    ...state,
    generateMaze,
    move,
    solve,
    toggleDarkMode,
    changeMode,
    setSocket,
    openJoinForm,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}