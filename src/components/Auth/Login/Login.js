import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    validateLogin().then(data => console.log(data));
  } 

  const validateLogin = async () => {
    const response = await fetch('/login/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: username, 
        password: password 
      })
    });
    return await response.json();
  }

  return (
    <div className="Login">
      <Container>
        <Jumbotron className="mt-3">
          <h2>Login View!</h2>
        </Jumbotron>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={10}>
              <Form.Group controlId="loginEmailAddress">
                <Form.Label>User name</Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  placeholder="User name"
                  onChange={e => setUsername(e.target.value)} 
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={10}>
              <Form.Group controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  required 
                  type="password" 
                  placeholder="Password" 
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Button
              className="mt-3"
              size="lg"
              variant="primary" 
              type="submit"
            >
              Submit
            </Button>
          </Form.Row>
        </Form>
      </Container>
    </div>
  )
}

export default Login;

