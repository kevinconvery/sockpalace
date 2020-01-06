import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css';

const Register = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    sendRegisterData().then((data) => console.log(data));
  }

  const sendRegisterData = async () => {
    const response = await fetch('/register/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: username, 
        email: email, 
        password: password, 
        address: address, 
        firstName: firstName, 
        lastName: lastName, 
        province: province, 
        city: city, 
        postalCode: postalCode 
      })
    });
    return await response.json();
  }
  
  return (
    <div class="Register">
      <Container className="mt-2">
        <Jumbotron>
          <h2>Register with us to create orders and review items!</h2>
        </Jumbotron>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={5}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">User name</Form.Label>
                <Form.Control
                  required
                  type="text" 
                  placeholder="Enter user name"
                  value={username}
                  onChange={e => setUsername(e.target.value)}  
                />
              </Form.Group>
            </Col>
            <Col lg={5}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">Email address</Form.Label>
                <Form.Control
                  required
                  type="email" 
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}  
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={5}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">First name</Form.Label>
                <Form.Control
                  required
                  type="text" 
                  placeholder="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}  
                />
              </Form.Group>
            </Col>
            <Col lg={5}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">Last name</Form.Label>
                <Form.Control
                  required
                  type="text" 
                  placeholder="Last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}  
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={10}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">Password</Form.Label>
                <Form.Control
                  required
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={10}>
              <Form.Group controlId="formBasicAddress">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">Address</Form.Label>
                <Form.Control
                  required
                  type="text" 
                  placeholder="Address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />    
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Col lg={4}>
              <Form.Group controlId="formBasicCity">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group controlId="formBasicProvince">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">Province</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Province"
                  value={province}
                  onChange={e => setProvince(e.target.value)}
                />
              </Form.Group>              
            </Col>
            <Col lg={2}>
              <Form.Group controlId="formBasicPostalCode">
                <Form.Label className="d-flex justify-content-start mx-2 mb-2">Postal code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={e => setPostalCode(e.target.value)}
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

export default Register;
