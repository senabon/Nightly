import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Styling'

function Featured() {
  return (
    <Card style={{ width: '25rem', height: '8rem', borderRadius:'10px', border: '0px' }}>
    <div style={{border: 'white 2px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <Card.Img variant="top" src={require('./GA-aquarium.jpg')} className="card-img" style={{borderRadius: '10px'}}/>
      <Card.Body className="card-body" >
        <Card.Title style={{ backgroundColor: 'lightblue'}}>Night @ the Georgia Aquarium</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" style={{ }}>
        <ListGroup.Item> Atlanta, Georgia</ListGroup.Item>
        <ListGroup.Item>Date: November 9th</ListGroup.Item>
        <ListGroup.Item>Host: 8pm-12am</ListGroup.Item>
      </ListGroup>
    <Card.Body>
        <Card.Link href="https://www.georgiaaquarium.org/">See Event</Card.Link>
      </Card.Body>
      </div>
    </Card>
  );
}

export default Featured;