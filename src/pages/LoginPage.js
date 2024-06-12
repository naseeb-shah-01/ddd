import React from 'react';

import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === 'admin' && data.password === 'password') {
      login();
      navigate('/orders');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
  
    <Container className="mt-5" style={{backgroundColor:'transparent'}}>
    
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...register('username', { required: true })}
              />
              {errors.username && <span className="text-danger">Username is required</span>}
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register('password', { required: true })}
              />
              {errors.password && <span className="text-danger">Password is required</span>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
