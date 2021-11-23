const express = require('express')
const router = express.Router()
const phoneController = require('../controllers/phoneController')
const { check } = require('express-validator')

// api/phones
router.post('/',
    [
        check('name', ' El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    phoneController.phoneCreate)

//Get phones
router.get('/',
    phoneController.getPhones)

//Update phone by id
router.put('/:id',
    [
        check('name', ' El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    phoneController.updatePhone)

//Delete phone by id
router.delete('/:id',
    phoneController.deletePhone)

module.exports = router