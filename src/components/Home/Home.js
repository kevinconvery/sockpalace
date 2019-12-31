import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = props => (
  <Container fluid>
    <Jumbotron className="my-3">
      <h1>Buy Our Socks!</h1>
      <p>
        Buy our socks or we'll just have socks and no place to put them. And then we wouldn't 
        be able to sell more socks at our low, low prices to you! So please buy our socks!
      </p>
      <p>
        <Button variant="primary">Take My Money</Button>
      </p>
    </Jumbotron>
    <Row className="mt-5 mb-3 justify-content-center">
      <Col className="col-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/assets/images/polkadot.jpg" style={{ height: '20rem' }} />
          <Card.Body>
            <Card.Title>Socks To Sell You</Card.Title>
            <Card.Text>
              Some fantastic deals at low, low prices! We have some of
              the most awesome designs on the Internet!
            </Card.Text>
            <Button variant="primary">Browse Here!</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/assets/images/row.jpg" style={{ height: '20rem' }} />
          <Card.Body>
            <Card.Title>More Amazing Deals Here!</Card.Title>
            <Card.Text>
              Rare sock printings that might not be re-run! Awesome designs that you
              might not find anywhere else!
            </Card.Text>
            <Button variant="primary">Or Browse Here!</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;

