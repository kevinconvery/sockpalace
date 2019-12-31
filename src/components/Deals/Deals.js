import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

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
    </Container>
  );
}

export default Deals;