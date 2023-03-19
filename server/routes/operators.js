const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const controller = require('../controllers/operators-controller')

router.get('/getAll/',()=>{} );
router.get('/get/:id',(id)=>{});
router.post('/update/:id',(id)=>{});

router.post('/add/', ()=>{});

router.post('/delete/:id', ()=>{});

module.exports = router;