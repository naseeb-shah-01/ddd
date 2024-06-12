const products = [
  { id: 1, productName: "Product1", productPrice: 100, productDescription: "Description1" },
  { id: 2, productName: "Product2", productPrice: 200, productDescription: "Description2" },
  // Add more mock products as needed
];

const saleOrders = [
  { id: 1, orderName: "Order1", orderPrice: 150, orderDescription: "Order Description1" },
  { id: 2, orderName: "Order2", orderPrice: 250, orderDescription: "Order Description2" },
  // Add more mock sale orders as needed
];

export const api = {
  getProducts: () => products,
  addProduct: (product) => products.push({ ...product, id: products.length + 1 }),
  updateProduct: (id, updatedProduct) => {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) products[index] = { ...updatedProduct, id };
  },
  deleteProduct: (id) => {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) products.splice(index, 1);
  },

  getSaleOrders: () => saleOrders,
  addSaleOrder: (saleOrder) => saleOrders.push({ ...saleOrder, id: saleOrders.length + 1 }),
  updateSaleOrder: (id, updatedSaleOrder) => {
    const index = saleOrders.findIndex((so) => so.id === id);
    if (index !== -1) saleOrders[index] = { ...updatedSaleOrder, id };
  },
  deleteSaleOrder: (id) => {
    const index = saleOrders.findIndex((so) => so.id === id);
    if (index !== -1) saleOrders.splice(index, 1);
  },
};
