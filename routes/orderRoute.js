const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.route('/').get(orderController.index)
                 .post(orderController.addOrder)
                 
router.route('/:orderid').get(orderController.getOrder)
                           .put(orderController.updateOrder)
                           .delete(orderController.delOrder)


module.exports = router;