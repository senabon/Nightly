import React,{useState} from 'react';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs'
import {FooterIcons} from './Styling'
import './Styling'




function Footer(){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };

    return(
        <div className='footer-icons-container' style={{backgroundColor: 'black'}}>
            <ul>
                <FooterIcons>
                <li className='footer-icons' style={{color: isHovering ? '#cd486b': 'grey'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><GrIcons.GrInstagram /></li>
                <li className='footer-icons' style={{color: isHovering ? '#1D9BF0': 'grey'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><BsIcons.BsTwitter/></li>
                <li className='footer-icons' style={{color: isHovering ? '#4267B2': 'grey'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><GrIcons.GrFacebook/></li>
                </FooterIcons>

            </ul>
            <div className='copyright'>
            <p style={{color: 'white'}}> &copy; 2022 Nightly, Inc.</p>
            </div>
        </div>
    
    
    
    )
    
    
    
    
    }
    
    export default Footer 