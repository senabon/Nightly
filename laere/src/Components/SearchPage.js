import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from 'react';
import SearchForm from "./SearchForm";
import './Styling.css'
import Header from "./Header";




function Search(){

    return(
        <div className="search-page">
        <Header/>
            <div className="results-container">
                <div className='search-page-bar'>
                    <SearchForm/>
                </div>
                <div className="search-results">
                    <p className='search-paragraph' style={{color:'white'}}>random speech
                    and other things
                    placeholder</p>
                    <p>modal</p> 
                    
                </div>
            </div>
        </div>
    )


}

export default Search