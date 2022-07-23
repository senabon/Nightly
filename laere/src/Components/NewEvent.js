import { useState } from 'react';
import React from 'react';
import Header from './Header'
import Footer from './Footer'

function NewEvent({accessToken}) {
  
  const [formInfo, setFormInfo] = useState(
    {
      content:'',
      user_string:'generic_user',
    }
    )

    const handleSubmit = (e) => {
      e.preventDefault()
      const url = process.env.REACT_APP_API_URL + 'addevents'
      const opts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formInfo),
      }
      fetch(url, opts)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }

    const handleChange = (e) => {
      setFormInfo({...formInfo, [e.target.id]: e.target.value})
    }

    
    return (
        <div style={{backgroundColor: 'black'}}> 
          <div style={{margin: '20px'}}>
          <Header/>
          </div>
          <div style={{height: '200vh', marginTop: '30%'}}>
            <form onSubmit={handleSubmit}>
              
                <input id="content" type="text" onChange={handleChange}/>
                {/* <input id="user_string" type="hidden" /> */}
                <button type="submit">Create New Event</button>
            </form>
            </div>
            <Footer/>
        </div>
  )
}

export default NewEvent;