import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import ProductForm from '../components/ProductForm';
import EditProductForm from '../components/EditProductForm';
import { api } from '../services/mockApi';
import DarkModeToggle from '../components/DarkModeToggle';

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setProducts(api.getProducts());
  }, []);

  const handleAddProduct = (product) => {
    api.addProduct(product);
    setProducts(api.getProducts());
  };

  const handleEditProduct = (product) => {
    api.updateProduct(editingProduct.id, product);
    setProducts(api.getProducts());
    setEditingProduct(null);
    setShow(false);
  };

  const handleDeleteProduct = (id) => {
    api.deleteProduct(id);
    setProducts(api.getProducts());
  };

  return (
    <Container style={{backgroundColor:'transparent',marginTop:'30px'}}>
      <h1>Product Management</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.productDescription}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => { setEditingProduct(product); setShow(true); }}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingProduct && (
            <EditProductForm 
              product={editingProduct} 
              onSave={handleEditProduct} 
              onCancel={() => { setEditingProduct(null); setShow(false); }} 
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductManagementPage;
