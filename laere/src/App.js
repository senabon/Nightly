import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
//import Footer from './Components/Footer'
import Home from './Components/Home'
//import Search from './Components/SearchPage';
//import SearchPage from './Components/SearchPage';
//import { AnimatePresence } from "framer-motion";
//import EditProfile from './Components/ProfileEdit'
import Login from './Components/Login';
import LogOut from './Components/Logout';
import ListEvents from './Components/ListEvents';
import NewEvent from './Components/NewEvent';
//import ProfilePage from './Components/profile'
import SignUp from './Components/SignUp'


// function Store({ match }) {
//   let { id } = match.params;
//   const imageHasLoaded = true;

//   return (
//     <>
//       <List selectedId={id} />
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </>
//   );
// }

function App() {

  const [userSignedIn, setUserSignedIn] = useState(localStorage.getItem('user'))

  //const [userSignedIn, setUserSignedIn] = useState(null)
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))


  return (
    <div className="App">
   
      <div className="container">
      
        <Routes>
              <Route path='' element={<Home/>}/>
              <Route path='events' element={<ListEvents/>} />
              
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<SignUp/>}/>
              <Route path='/addevents' element={<NewEvent/>}/>
              <Route path='logout' element={<LogOut
                userSignedIn={userSignedIn}
                setUserSignedIn={setUserSignedIn}
                setAccessToken={setAccessToken}
                />}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
