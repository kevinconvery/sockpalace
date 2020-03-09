import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Sales = props => {
  const handleCreateOrder = async event => {
    event.preventDefault()
    try {
      const response = await fetch('/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container fluid>
      <Jumbotron className="my-3">
        <h1>New Sales</h1>
        <p>
          Here's some socks that we're offering first at the best prices available. Get your walk on.
        </p>
      </Jumbotron>
      <p>
        <Button 
          variant="primary" 
          className="mx-2"
        >
          Walk On In
        </Button>
        <Button 
          variant="primary" 
          onClick={handleCreateOrder}
        >
          Create an Order
        </Button>
      </p>
    </Container>
  )
}

export default Sales