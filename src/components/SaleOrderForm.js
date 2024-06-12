import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

const SaleOrderForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errors.submitError && <Alert variant="danger">{errors.submitError.message}</Alert>}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formOrderName">
          <Form.Label>Order Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter order name" 
            {...register('orderName', { required: "Order name is required" })}
          />
          {errors.orderName && <span className="text-danger">{errors.orderName.message}</span>}
        </Form.Group>

        <Form.Group as={Col} controlId="formOrderPrice">
          <Form.Label>Order Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter order price" 
            {...register('orderPrice', { 
              required: "Order price is required",
              min: { value: 0, message: "Price cannot be negative" }
            })}
          />
          {errors.orderPrice && <span className="text-danger">{errors.orderPrice.message}</span>}
        </Form.Group>
      </Row>

      <Form.Group controlId="formOrderDescription">
        <Form.Label>Order Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter order description" 
          {...register('orderDescription', { required: "Order description is required" })}
        />
        {errors.orderDescription && <span className="text-danger">{errors.orderDescription.message}</span>}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default SaleOrderForm;
