import React, {useState, useEffect} from 'react'
import * as HiIcons from 'react-icons/hi'
import './Styling.css'


function SearchForm() {
    const [query, setQuery] = useState("")

    const eventRestEndpoint = 'events'
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + eventRestEndpoint)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setEvents(data)
          })
      }, [])  

  return (
    <div className='searchCont' >
      <div className='search'>
       
            <input type="text" id="searchInput" onChange={event => setQuery(event.target.value)} placeholder="What do you want to do?"/>
            <button type='submit' className='submit' style={{border: 'none',backgroundColor: 'white', borderRadius: '25px'}}><HiIcons.HiSearchCircle id='search-button' /></button> 
            {/* {
                events.filter((post) => {
                    if (query === '') {
                      return post;
                    } //else if (post.toLowerCase().includes(query.toLowerCase())) {
                     // return post;
                    //}
                  })
                  .map((item, index) => (
                    <div className="box" key={index}>
                      <p>{item.title}</p>
                      <p>{item.location}</p>
                    </div>
                  ))




                  } */}

    </div>
</div>
  )
}

export default SearchForm



