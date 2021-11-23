const Phone = require('../models/Phone.model')
const { validationResult } = require('express-validator')


exports.phoneCreate = async (req, res) => {

    //Check errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() })
    }

    try {
        //Create a new phone
        const phone = new Phone(req.body)

        //Save the phone
        phone.save()
        res.json(phone)

    } catch (error) {
        res.status(500).send(`There was an error: ${error}`)

    }
}

exports.getPhones = async (req, res) => {
    try {
        const phones = await Phone.find().sort({ createdAt: -1 })
        res.json({ phones })
    } catch (error) {
        res.status(500).send(`There was an error: ${error}`)
    }
}

exports.updatePhone = async (req, res) => {
    //Check errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() })
    }

    const { name } = req.body
    const newPhone = {}

    if (name) {
        newPhone.name = name
    }

    try {
        // check ID 
        let phone = await Phone.findById(req.params.id)

        // Check if the phone already exists
        if (!phone) {
            return res.status(404).json({ msg: 'Phone does not exist' })
        }

        //Update the phone
        phone = await Phone.findByIdAndUpdate({ _id: req.params.id }, { $set: newPhone }, { new: true })
        res.json({ phone })


    } catch (error) {
        res.status(500).send('There was an error while the phone was updating')
    }
}

// Delete the phone by ID
exports.deletePhone = async (req, res) => {
    try {
        // check ID 
        let phone = await Phone.findById(req.params.id);

        // Check if the phone already exists
        if (!phone) {
            return res.status(404).json({ msg: 'Phone does not exist' })
        }

        // Delete phone
        await Phone.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Phone deleted' })

    } catch (error) {
        res.status(500).send(`Server error: ${error}`)

    }
}