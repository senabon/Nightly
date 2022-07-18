import React from 'react'
import * as HiIcons from 'react-icons/hi'
import './Styling.css'


function SearchForm({query, setQuery}) {


  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='searchCont' >
      <div className='search'>
        <input type="text" id="searchInput" onChange={handleChange} placeholder="What would you like to learn?"/>
        <HiIcons.HiSearchCircle id='search-button'/>
            
    </div>
</div>
  )
}

export default SearchForm