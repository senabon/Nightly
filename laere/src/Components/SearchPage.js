import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import SearchForm from "./SearchForm";
import './Styling.css'
import Header from "./Header";
//import SearchResults from "./SearchResults";
import Data from './Events.json'
import * as HiIcons from 'react-icons/hi'



function Search(){
    const [query, setQuery] = useState("")
    

    return(
        <>
        <Header/>
        <div className="search-page">
            <div className="results-container">
                <div className='search-pg-bar'>
                    <input type="text" id="searchpageInput" onChange={event => setQuery(event.target.value)} placeholder="What would you like to learn?"/>
            <button style={{borderRadius:"20px"}} className='b-container' type='submit'><HiIcons.HiSearchCircle id='pg-search-button'/></button> 
                </div>
                <div>
                {
                Data.filter(post =>{
                    if(query ===""){
                        //console.log
                        return post;
                    }else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                        console.log(post.title)
                        return post;
                    }
                     })
                .map((post) => {
                    <div className='card' key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.location}</p>
                    </div>
                })
                    }
                    <h1>Hi</h1>
                </div>
            </div>
                
                
                 
        </div>
        </>
    )


}

export default Search