const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');


router.route('/').get(paymentController.index)
                 .post(paymentController.addPayment)
                 
router.route('/:productid').get(paymentController.getPayment)
                           .put(paymentController.updatePayment)
                           .delete(paymentController.delPayment)


module.exports = router;