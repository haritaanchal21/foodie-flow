const { v4: uuidv4 } = require('uuid');
const { getEstimatedDeliveryTime } = require('./utils');
const { orders } = require('./data');

function placeOrder({ name, email, address, items }) {
  const order = {
    id: uuidv4(),
    name,
    email,
    address,
    items,
    deliveryTime: getEstimatedDeliveryTime(),
    status: 'active'
  };
  orders.push(order);
  return order;
}

function getOrderByEmail(email) {
  return orders.filter(order => order.email === email);
}

function getAllOrders() {
  return orders.filter(order => order.status === 'active');
}

function cancelOrder(email, orderId) {
  const order = orders.find(o => o.email === email && o.id === orderId);
  if (order && order.status === 'active') {
    order.status = 'cancelled';
    return order;
  }
  return null;
}

function modifyAddress(email, orderId, newAddress) {
  const order = orders.find(o => o.email === email && o.id === orderId);
  if (order && order.status === 'active') {
    order.address = newAddress;
    return order;
  }
  return null;
}

module.exports = {
  placeOrder,
  getOrderByEmail,
  getAllOrders,
  cancelOrder,
  modifyAddress
};
