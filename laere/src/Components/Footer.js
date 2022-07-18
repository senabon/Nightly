import React from 'react';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs'
import {FooterIcons} from './Styling'
import { FaIcons } from 'react-icons/fa';



function Footer(){


    return(
        <div className='footer-icons-container'>
            <ul>
                <FooterIcons>
                <li className='footer-icons'><GrIcons.GrInstagram style={{color: ' #cd486b'}}/></li>
                <li className='footer-icons'><BsIcons.BsTwitter style={{color: '#1D9BF0' }}/></li>
                <li className='footer-icons'><GrIcons.GrFacebook style={{color: '#4267B2' }}/></li>
                </FooterIcons>

            </ul>
            <p> &copy; 2022 Nightly, Inc.</p>
    
        </div>
    
    
    
    )
    
    
    
    
    }
    
    export default Footer 