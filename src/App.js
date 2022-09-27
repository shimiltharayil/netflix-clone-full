import React, { useEffect } from 'react';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from "./Screens/ProfileScreen"
import './Css/App.css';
import {

  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './features/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
      useEffect (() => {
             const unsubscribe =   auth.onAuthStateChanged((userAuth) =>{
          if(userAuth){
            //LoggedIn
            dispatch (
              login({
                uid: userAuth.uid,
                email: userAuth.email,
              })
            )
          } else {
            //Logout
            dispatch(logout())
          }
        })
        return unsubscribe;
      },[dispatch])
  return (
    <div className="App">
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
        
                  <>
             <Route exact path="/profile">
            <ProfileScreen />
             </Route>
          <Route exact path="/">
        <HomeScreen /> 
        
           </Route>
           </>
   )}
   </Router>
    
    </div>
  );
}

export default App;
