// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import { GlobalContext, GlobalProvider } from "./Context/GlobalContext"

// make App as a dummy container to display various routes as nav bar
import './App.css'
import React from 'react';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Dashboard from './Components/Dashboard.jsx';
import CreateProject from './Components/CreateProject.jsx';


const App = props => {
  return (
    <>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<><CreateProject /><Dashboard /></>} />
      </Routes>
    
    </>
  )
}


export default App;



// use this to pass the global state to all children
// const App = () => {
//  return (
//    <GlobalProvider>
//      <Main />
//    </GlobalProvider>
//  )
// };
 
// // use this component as your main app
// const Main = () => {
//  // use state variables by destructuring from useContext(context)
//  const { stateVar, changeStateVar } = useContext(GlobalContext)
//  return (
//    <>
//      {stateVar}
//      <button onClick={() => changeStateVar('newValue')} />
//    </>
//  )
// };
 
// export default App;




























// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
