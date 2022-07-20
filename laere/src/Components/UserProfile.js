import React, { useContext, useCallback } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useUserRequired } from '../utilities/hooks'
import {logout} from '../utilities/logout';
import  UserContext from './UserContext'

function ProfilePage(){
    useUserRequired();
    const history = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = useCallback(() => {
    logout().then(() => {
      setUser(null);
      history.push('/login');
    });
  }, [setUser, history]);

  if (!user) {
    return null;
  }
    return(
        <div>
            <h1> Hi,  </h1>
                <div>
                <img className="profile-picture"  alt="" src=""/>
                <h3>Full Name:</h3>
                <h3>Location:</h3>
                <h3>Liked Events:</h3>
                <h3>Description </h3> 
                <p> Ipsum Lorem and description of person that is editable</p>


                </div>


            <button> <LinkRouter to='/edit'>Edit</LinkRouter></button>
            <button className='logout' onClick={handleLogout}>
                Logout
            </button>
        </div>
    )

}

export default ProfilePage;