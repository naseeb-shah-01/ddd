import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import SaleOrderForm from '../components/SaleOrderForm';
import EditSaleOrderForm from '../components/EditSaleOrderForm';
import { api } from '../services/mockApi';
import DarkModeToggle from '../components/DarkModeToggle';

const SaleOrdersPage = () => {
  const [saleOrders, setSaleOrders] = useState([]);
  const [editingSaleOrder, setEditingSaleOrder] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setSaleOrders(api.getSaleOrders());
  }, []);

  const handleAddSaleOrder = (saleOrder) => {
    api.addSaleOrder(saleOrder);
    setSaleOrders(api.getSaleOrders());
  };

  const handleEditSaleOrder = (saleOrder) => {
    api.updateSaleOrder(editingSaleOrder.id, saleOrder);
    setSaleOrders(api.getSaleOrders());
    setEditingSaleOrder(null);
    setShow(false);
  };

  const handleDeleteSaleOrder = (id) => {
    api.deleteSaleOrder(id);
    setSaleOrders(api.getSaleOrders());
  };

  return (
    <Container style={{backgroundColor:'transparent',marginTop:'30px'}}>
      <h1>Sale Orders Management</h1>
      <SaleOrderForm onSubmit={handleAddSaleOrder} />
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
          {saleOrders.map((saleOrder) => (
            <tr key={saleOrder.id}>
              <td>{saleOrder.orderName}</td>
              <td>{saleOrder.orderPrice}</td>
              <td>{saleOrder.orderDescription}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => { setEditingSaleOrder(saleOrder); setShow(true); }}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteSaleOrder(saleOrder.id)}
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
          <Modal.Title>Edit Sale Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingSaleOrder && (
            <EditSaleOrderForm 
              saleOrder={editingSaleOrder} 
              onSave={handleEditSaleOrder} 
              onCancel={() => { setEditingSaleOrder(null); setShow(false); }} 
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SaleOrdersPage;
