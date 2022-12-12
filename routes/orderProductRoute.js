const express = require('express');
const router = express.Router();
const orderProductController = require('../controllers/orderProductController');


router.route('/').get(orderProductController.index)
                 .post(orderProductController.addOrderProduct)
                 
router.route('/:orderproductid').get(orderProductController.getOrderProduct)
                           .put(orderProductController.updateOrderProduct)
                           .delete(orderProductController.delOrderProduct)


module.exports = router;