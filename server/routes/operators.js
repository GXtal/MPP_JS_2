const express = require('express');
const router = express.Router();
const controller = require('../controllers/operators-controller')

router.get('/getAll/',controller.getOperators );
router.get('/get/:id',controller.getOperator);
router.post('/update/:id',controller.updateOperator);

router.post('/add/', controller.addOperator);

router.post('/delete/:id', controller.deleteOperator);

module.exports = router;