import React, {useState} from 'react'
import * as HiIcons from 'react-icons/hi'
import './Styling.css'


function SearchForm() {
    const [query, setQuery] = useState("")

  return (
    <div className='searchCont' >
      <div className='search'>
       
            <input type="text" id="searchInput" onChange={event => setQuery(event.target.value)} placeholder="What would you like to learn?"/>
            <button type='submit'><HiIcons.HiSearchCircle id='search-button'/></button> 
    </div>
</div>
  )
}

export default SearchForm