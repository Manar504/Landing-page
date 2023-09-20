import React from 'react'
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card  style={{ width: '18rem' ,background:"gray",color:"white"}}>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card title={props.title}></Card>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default MyCard;
