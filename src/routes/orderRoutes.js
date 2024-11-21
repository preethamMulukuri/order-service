const express = require('express');
const { addOrder, getAllOrders, getOrder, updateOrder, deleteOrder } = require('../controllers/orderController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/add', verifyToken, addOrder);
router.get('/', verifyToken, getAllOrders);
router.get('/:id', verifyToken, getOrder);
router.put('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);

module.exports = router;
