const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.route('/').get(userController.index)
                 .post(userController.addUser)

router.route('/:userid').get(userController.getUser)
                        .put(userController.updateUser)


module.exports = router;