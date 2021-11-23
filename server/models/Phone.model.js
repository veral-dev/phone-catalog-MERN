const mongoose = require('mongoose')

const PhoneSchema = mongoose.Schema({
      name: {
        type: String, required: true, trim: true
      },
      manufacturer: {
        type: String
      },
      description: {
        type: String
      },
      color: {
        type: String
      },
      price: {
        type: Number
      },
      imageFileName: {
        type: String
      },
      screen: {
        type: String
      },
      processor: {
        type: String
      },
      ram: {
        type: Number
      }
},{
    timestamps: true
})

module.exports = mongoose.model('Phone', PhoneSchema)