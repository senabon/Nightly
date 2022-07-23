import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Styling'

function FeaturedTwo() {
  return (
    <Card style={{ width: '25rem', height: '8rem', borderRadius:'10px', border: '0px' }}>
    <div style={{border: 'white 2px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)', backgroundColor:'black'}}>
      <Card.Img variant="top" src={require('./GA-aquarium.jpg')} className="card-img" style={{borderRadius: '20px'}}/>
      <Card.Body className="card-body" >
        <Card.Title style={{ backgroundColor: '#485a84', color:'white'}}>Night @ the Georgia Aquarium</Card.Title>
        <Card.Text>
         Spend a night under the ocean!
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" style={{ }}>
        <ListGroup.Item> Atlanta, Georgia</ListGroup.Item>
        <ListGroup.Item>Date: 9th November - 8pm</ListGroup.Item>
        <ListGroup.Item>Host: The Georgia Aquarium</ListGroup.Item>
      </ListGroup>
    <Card.Body>
        <Card.Link href="https://www.georgiaaquarium.org/">See Event</Card.Link>
      </Card.Body>
      </div>
    </Card>
  );
}

export default FeaturedTwo;