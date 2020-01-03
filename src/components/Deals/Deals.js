import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Deals = props => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCardData();
  }, [])

  // Returns the currency as a string amount.
  const convertToCurrency = amount => {
    const dollars = Math.floor(amount / 100);
    let cents = amount % 100;
    if (cents === 0) {
      cents = '00';
    } else if (cents < 10) {
      cents = `0${cents}`;
    } else {
      cents = `${cents}`;
    }
    return `${dollars}.${cents}`;
  }

  // Applies the discount on the product to the item,
  // returning the discounted price
  const applyDiscount = item => {
    const discountedPrice = item.sale_price - Math.floor(item.sale_price * (item.discount / 100));
    console.log(`Discounted price: ${discountedPrice}`);
    return convertToCurrency(discountedPrice);
  }

  const getCardData = async () => {
    try {
      const response = await fetch('/products/discount/0');
      const data = await response.json();
      console.log(data);
      setCardData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container fluid>
      <Jumbotron className="my-3">
        <h1>New Sales</h1>
        <p>
          Try on some budget styles that won't put a hole in your pocketbook!
        </p>
      </Jumbotron>
      <Row className="mt-5 mb-3 justify-content-center">
        {
          cardData && cardData.map((item) => {
            const imageUrl = `/assets/images/${item.image_url}`;
            return (
              <Col className="col-4" key={item.id}>
                <Card style={{ width: '18rem' }} className="mx-5">
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