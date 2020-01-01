import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Deals = props => {
  return (
    <Container fluid>
      <Jumbotron className="my-3">
        <h1>New Sales</h1>
        <p>
          New deals? We always have some.
        </p>
        <p>
          <Button variant="primary">Deals Deals Deals</Button>
        </p>
      </Jumbotron>
      <Row>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Deals;