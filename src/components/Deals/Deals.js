import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { applyDiscount, convertToCurrency, getData } from '../../helpers/helpers';

const Deals = props => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCardData();
  }, [])
  
  const getCardData = async () => {
    const data = await getData("DEALS")
    setCardData(data)
  }
  
  return (
    <Container fluid>
      <Jumbotron className="my-3">
        <h1>New Sales</h1>
        <p>
          Try on some discounted styles that won't put a hole in your pocketbook!
        </p>
      </Jumbotron>
      <Row className="mt-5 mb-3 justify-content-center">
        {
          cardData && cardData.map((item) => {
            const imageUrl = `/assets/images/${item.image_url}`;
            return (
              <Col className="col-4" key={item.id}>
                <Card style={{ width: '24rem', height: '36rem' }} className="mx-5">
                  <Card.Img variant="top" src={imageUrl} style={{ height: '20rem' }} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${convertToCurrency(item.sale_price)} Disc ${applyDiscount(item)}
                    </Card.Subtitle>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                    <Button variant="primary">Add To Order</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      
      </Row>
    </Container>
  );
}

export default Deals;