const { model } = require('mongoose');
const { ordersSchema } = require('../schemas/orders.Schema.js');

const OrdersModel = model('order', ordersSchema);

module.exports = OrdersModel;