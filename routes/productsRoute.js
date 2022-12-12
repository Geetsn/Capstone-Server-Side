const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.route('/').get(productsController.index)
                 .post(productsController.addProducts)
                 
router.route('/:productid').get(productsController.getProducts)
                           .put(productsController.updateProduct)
                           .delete(productsController.delProduct)


module.exports = router;