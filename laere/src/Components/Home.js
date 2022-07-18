import React, {Component} from 'react'
import SearchForm from './SearchForm'
import Contact from './ContactForm'
import './Styling.css'
import {Link as LinkRouter} from 'react-router-dom'
import logo from './Nightly.png'



export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
        <div id="search" style={{height: 600}}>
           <SearchForm/>
        </div>
        <div id="featured" style={{height: 600}}>
        <h1>Featured Events</h1>
          Modals for events go here. 
        </div>
        <div id="about" style={{height: 500}}>
        <h1>About Us</h1>
          Nightly, Inc. is a company that caters to night owls. 
        <h3>Companies we partner with:</h3>
        </div>
        <div id="contact" style={{height: 600}}>
            <div id='contact-container'>
        <h1 id="contact-title">Contact</h1>
         <p> Have questions? Send us an email!</p>
          <Contact/>
          </div>
       
        </div>
            </div>
        )
    }
}