const Phone = require('../models/Phone.model');
const { validationResult } = require('express-validator');

exports.createPhone = async (req, res) => {
  //Check errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    //Create a new phone
    const phone = new Phone(req.body);
    //Save the phone
    const resp = await phone.save();
    res.json({ ok: 'The phone has been created', id: resp._id });
  } catch (error) {
    res.status(500).send(`There was an error: ${error}`);
  }
};

exports.getPhones = async (req, res) => {
  try {
    const phones = await Phone.find({}, { name: 1, price: 1, image: 1 });
    res.json({ phones });
  } catch (error) {
    res.status(500).send(`There was an error: ${error}`);
  }
};

exports.getPhone = async (req, res) => {
  try {
    // check ID
    const phone = await Phone.findById(req.params.id);
    res.json(phone);
  } catch (error) {
    res.status(404).send('Error 404: Page does not exist');
  }
};

exports.updatePhone = async (req, res) => {
  //Check errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newPhone = req.body;

  try {
    // check ID
    let phone = await Phone.findById(req.params.id);
    //Update the phone
    phone = await Phone.findByIdAndUpdate(req.params.id, newPhone, { new: true });
    res.json({ ok: 'The phone has been updated', id: phone._id });
  } catch (error) {
    res.status(404).send('Error 404: Page does not exist');
  }
};

// Delete the phone by ID
exports.deletePhone = async (req, res) => {
  try {
    // Delete phone
    await Phone.findOneAndRemove({ _id: req.params.id });
    res.json({ ok: 'Phone deleted' });
  } catch (error) {
    res.status(404).send('Error 404: Phone does not exist');
  }
};
