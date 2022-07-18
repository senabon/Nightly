import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

function ProfilePage(){

    return(
        <div>
            <h1> Hi,  </h1>
                <div>
                <img className="profile-picture" src="" alt="profile image"/>
                <h3>Full Name:</h3>
                <h3>Location:</h3>
                <h3>Liked Events:</h3>
                <h3>Description </h3> 
                <p> Ipsum Lorem and description of person that is editable</p>




    
                </div>


            <button> <LinkRouter to='/edit'>Edit</LinkRouter></button>

        </div>
    )

}

export default ProfilePage;