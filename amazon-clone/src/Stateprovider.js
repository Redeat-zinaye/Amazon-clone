import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Push and Pull information from the data layer
export const useStateValue = () => useContext(StateContext);




// /////////////////////////////


// const [state, dispatch] = useReducer(reducer, initialValue);

// <button onClick={() => dispatch({type: 'increment', payload: 1})}>
//   +
// </button>


// import { useReducer } from 'react';

// // initial state of the database
// const initialState = { count: 0 };

// // API logic: how to update the database when the
// // 'increment' API endpoint is called
// const reducer = (state, action) => {
//   if (action.type === 'increment') {
//     return { count: state.count + action.payload };
//   }
// };

// function App() {
//   // you can think of this as initializing and setting
//   // up a connection to the backend
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       {/* Reading from the database */}
//       Count: {state.count}
//       {/* calling the API endpoint when the button is clicked */}
//       <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
//         +
//       </button>
//     </div>
//   );
// }

// export default App;



