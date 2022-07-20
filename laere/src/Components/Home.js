import React, {Component} from 'react'
import SearchForm from './SearchForm'
import Contact from './ContactForm'
import './Styling.css'
import {Link as LinkRouter} from 'react-router-dom'
import logo from './Nightly.png'
import Header from './Header'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useUserRequired } from '../utilities/hooks'
import Featured from './Cards'





export default class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            <div className='Home'>
                <div id="search" style={{height: 600}}>
                <SearchForm/>
                </div>
                <div id="featured" style={{height: 600}}>
                    <h1>Featured Events</h1>
                    <Featured/>
                </div>
                <div id="about" style={{height: 600}}>
                    <h1>About Us</h1>
                    Nightly, Inc. is a company that caters to night owls. 
                    <h3>Companies we partner with:</h3>
                    <div className='carousel-wrapper' style={{width: '30%', height: '5%'}}>
                    <Carousel showArrows={true} className="carousel-dark" //onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    >
                        <div className='carousel-item active'>
                            <img src={require("./Netflix-01.jpg")} className="d-block w-100" alt="Netlfix-logo" class='active' />
                        </div>
                        <div>
                            <img className="d-block w-300" alt="spotify-logo" src={require("./Spotify-logo.png")} />
                        </div>
                        <div>
                            <img className="carousel-img" alt="i-heart-radio-logo" src={require("./iHR.png")} />
                        </div>
                        <div>
                            <img className="carousel-img" alt="trip-advisor-logo" src={require("./tripadvisor.png")} />
                        </div>
                        <div>
                            <img className="carousel-img" alt="bumble-logo" src={require("./bumble.png")} />
                        </div>
                        <div>
                            <img className="carousel-img" alt="epic-games-logo" src={require("./epic.png")} />
                        </div>
                    </Carousel>
                    </div>
                </div>
            <div id="contact" style={{height: 600}}>
                <div id='contact-container'>
                    <h1 id="contact-title">Contact</h1>
                    <p> Have questions? Get in touch with us!</p>
                <Contact/>
            </div>
       
        </div>
    </div>
        </>
        )
    }
}