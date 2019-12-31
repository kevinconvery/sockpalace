import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Sales = props => {
  return (
    <Container fluid>
      <Jumbotron className="my-3">
        <h1>New Sales</h1>
        <p>
          Here's some socks that we're offering first at the best prices available. Get your walk on.
        </p>
        <p>
          <Button variant="primary">Walk On In</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Sales;