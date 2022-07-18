import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Search from './Components/SearchPage';
//import SearchPage from './Components/SearchPage';
import { AnimatePresence } from "framer-motion";
import List from './Components/EventList';
import { Item } from './Components/Item';
import ProfilePage from './Components/UserProfile'
import EditProfile from './Components/ProfileEdit'


function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <div className="App">
    <Header/>
      <div className="container">
      
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>} />
              <Route path='/user-profile' element={<ProfilePage/>}/>
              <Route path='/edit-user-profile' element={<EditProfile/>}/>
        </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
