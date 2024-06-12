import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

const ProductForm = ({ onSubmit }) => {
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
        <Form.Group as={Col} controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter product name" 
            {...register('productName', { required: "Product name is required" })}
          />
          {errors.productName && <span className="text-danger">{errors.productName.message}</span>}
        </Form.Group>

        <Form.Group as={Col} controlId="formProductPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter product price" 
            {...register('productPrice', { 
              required: "Product price is required",
              min: { value: 0, message: "Price cannot be negative" }
            })}
          />
          {errors.productPrice && <span className="text-danger">{errors.productPrice.message}</span>}
        </Form.Group>
      </Row>

      <Form.Group controlId="formProductDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter product description" 
          {...register('productDescription', { required: "Product description is required" })}
        />
        {errors.productDescription && <span className="text-danger">{errors.productDescription.message}</span>}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default ProductForm;
