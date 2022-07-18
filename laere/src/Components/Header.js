import React, { Component } from 'react'
import {Link as LinkScroll} from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from "react-icons/md";
import {HeaderIcons} from './Styling'
import * as BsIcons from 'react-icons/bs'
import './Styling.css'
import logo from './Nightly.svg'

export default class Header extends Component {
    render() {
        return (
        <div className='header-container'>
        <ul>
        <HeaderIcons>
          <li><LinkScroll className='home-header' activeClass="active" to="home" spy={true} smooth={true}><LinkRouter to="/" style={{color: 'white', textDecoration: 'none'}}>Home</LinkRouter></LinkScroll></li>
          <li><LinkRouter to="/search" spy={true} smooth={true} style={{color: 'white', textDecoration: 'none'}}><FaIcons.FaSearch style ={{fontSize: '120%', color: 'white'}}/> Search</LinkRouter></li>
          <li><LinkScroll to="featured" spy={true} smooth={true}><BsIcons.BsStars style={{fontSize: '130%', color: 'white'}}/><LinkRouter to="/" style={{color: 'white', textDecoration: 'none'}}> Featured</LinkRouter></LinkScroll></li>
          <li><LinkScroll to="about" spy={true} smooth={true}><MdIcons.MdOutlineWavingHand style ={{fontSize: '130%', color: 'white'}}/><LinkRouter to="/" style={{color: 'white', textDecoration: 'none'}}> About</LinkRouter></LinkScroll></li>
          <li><LinkScroll to="contact" spy={true} smooth={true}><MdIcons.MdOutlinePersonPinCircle style ={{fontSize: '140%', color: 'white'}}/><LinkRouter to="/" style={{color: 'white', textDecoration: 'none'}}> Contact</LinkRouter></LinkScroll></li>
          </HeaderIcons>
        </ul>
        </div>
        )
    }
}