import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../actions'

const Login = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    validateLogin()
    .then(data => {
      console.log(data);
      switch(data) {
        case "VALID_LOGIN":
          dispatch(signIn())
          break;
        case "INVALID_LOGIN_NO_USER":
          setErrorMessage("No user by that name.")
          break;
        case "INVALID_LOGIN_NO_PASSWORD":
          setErrorMessage("No password provided.");
          break;
        case "INVALID_LOGIN_PASSWORDS_DO_NOT_MATCH":
          setErrorMessage("Invalid password.")
          break;
        default:
          break;
      }
    });
  } 

  const handleUsernameChange = (e) => {
    setErrorMessage("");
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setErrorMessage("");
    setPassword(e.target.value);
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
                  onChange={handleUsernameChange} 
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
                  onChange={handlePasswordChange}
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
        <h3>{errorMessage}</h3>
      </Container>
    </div>
  )
}

export default Login;

