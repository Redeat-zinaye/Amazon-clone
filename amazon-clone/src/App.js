import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51LyT2gIyu56npv8LTWXUq3EHttDYrNJjwRvEfa2RcA6VmZRSpa1luaVXzXJ5zpO3wxyDZmqnKErA77Ka304zFpQy00455REm7n');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
  
    <Router>
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}/> 
        <Route path='/' element={<><Header /><Home /></>}/>
        <Route path='/checkout' element={<><Header /><Checkout /></>}/>
        <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}/>
      </Routes>
    </div>
    </Router>
    )
}

export default App;
