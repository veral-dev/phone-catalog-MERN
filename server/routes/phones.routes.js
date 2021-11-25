const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phoneController');
const { check } = require('express-validator');

// api/phones
router.post('/create', [check('name', 'The phone name is mandatory').not().isEmpty()], phoneController.createPhone);

//Get phones
router.get('/', phoneController.getPhones);

//Update phone by id
router.put('/update/:id', [check('name', 'The phone name is mandatory').not().isEmpty()], phoneController.updatePhone);

//Delete phone by id
router.delete('/:id', phoneController.deletePhone);

//Get phone
router.get('/detail/:id', phoneController.getPhone);

module.exports = router;
