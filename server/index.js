const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

//Create server
const app = express()

//Connect to database
connectDB()

//Enable cors
app.use(cors())

//Enable express.json
app.use(express.json({ extend: true }))

//App port
const port = process.env.PORT || 5000

//Import routes
app.use('/api/phones', require('./routes/phones'))


//Start the app
app.listen(port, '0.0.0.0', () => {
    console.log(`Server working on the port: ${port}`)
})