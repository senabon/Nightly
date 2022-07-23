import React from 'react';
import {useState, useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link as LinkRouter} from 'react-router-dom';
//import './Styling.css'
import Card from 'react-bootstrap/Card';
import { useRef } from "react";
import { motion } from "framer-motion";


import NewEvent from './NewEvent'
import SearchForm from './SearchForm';
import { render } from '@testing-library/react';

function ListEvents({userSignedIn, accessToken}) {
    
    const eventRestEndpoint = 'events'
    const constraintsRef = useRef(null);

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + eventRestEndpoint)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setEvents(data)
          })
      }, [])  

  return (
  <div style={{backgroundColor:'black'}}>
      <Header/>
    <div style={{height:'220vh', color: 'white'}}>
    <img style={{height:'20%', marginTop: '-7%', marginLeft: '-80%'}} src={require('./Nightly.png')}/>
    <div style={{alignItems:'center', justifyContent: 'center', marginLeft: '20%', marginTop: '-25%'}}>
      <SearchForm/>
    </div>
    
      <ul>
      {
        events.map((item,ind) => {
          return (//(<li key={ind}>{item.title} {item.datetime} {item.location} {item.description} </li>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="card-search">
          <Card style={{ width: '25rem', height: '8rem', borderRadius:'10px', border: '0px' }}>
    <div style={{border: 'white 2px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)', backgroundColor:'black'}}>
    <Card.Img variant="top" src={item.photo_url} className="card-img" style={{borderRadius: '20px', height:'40vh'}}/>
      <Card.Body className="card-body" >
        <Card.Title style={{ backgroundColor: '#485a84', color:'white'}}> {item.description}</Card.Title>
        {/*<Card.Text>
        {item.description}
        </Card.Text>*/}
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroup.Item> {item.city_state}</ListGroup.Item>
        <ListGroup.Item>Date:{item.dateTime}</ListGroup.Item>
        <ListGroup.Item>Location:{item.location}</ListGroup.Item>
        <ListGroup.Item>Host: {item.host}</ListGroup.Item>
      </ListGroup>
    <Card.Body>
        <Card.Link href={item.url}>See Event</Card.Link>
      </Card.Body>
      </div>
    </Card>
    </motion.div>
          )
        //})
      })
    }
      </ul>
     
      {userSignedIn ? <NewEvent accessToken={accessToken}/> : null}
      <button><LinkRouter to='/addevents'>Add an Event </LinkRouter></button>
      </div>
      <Footer/>
  </div>
  
  );
}

export default ListEvents;