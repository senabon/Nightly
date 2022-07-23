// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import React, { useState } from 'react';
// //import SearchForm from "./SearchForm";
// import './Styling.css'
// import Header from "./Header";
// //import SearchResults from "./SearchResults";
// import * as HiIcons from 'react-icons/hi'

// const getFilteredItems = (query, items) => {
//     if(!query){
//         return items;
//     }
//     return items.filter((events) => events.name.includes(query))
// }

// function Search(){
//     const [query, setQuery] = useState('');


//     const filteredItems = getFilteredItems(query, items);

//     return(
//         <>
//         <Header/>
//         <div className="search-page">
//             <div className="results-container">
//                 <div className='search-pg-bar'>
//                     <input type="text" id="searchpageInput" onChange={(e) => setQuery(e.target.value)} placeholder="What do you want to do tonight?"/>
//             <button style={{borderRadius:"20px"}} className='b-container' type='submit'><HiIcons.HiSearchCircle id='pg-search-button'/></button> 
//                 </div>
//                 <div>
//                     <ul>
//         {filteredItems.map((value) =>( <h1 key={value.name}>{value.name}</h1>))}

//                     </ul>
//                     <h1>Hi</h1>
//                 </div>
//             </div>
//                <button><Link to="/add-event">Add An Event</Link></button> 
                
                 
//         </div>
//         </>
//     )


// }

// export default Search



// // Data.filter(post =>{
//                 //     if(query ===""){
//                 //         //console.log
//                 //         return post;
//                 //     }else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//                 //         console.log(post.title)
//                 //         return post;
//                 //     }
//                 //      })
//                 // .map((post) => {
//                 //     <div className='card' key={post.id}>
//                 //         <p>{post.title}</p>
//                 //         <p>{post.location}</p>
//                 //     </div>
//                 // })