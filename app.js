const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./utils/connection')
const router = require('./routes/index')

const app = express()

app.use(bodyParser.json())

app.use('/api', router)

app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Route not found!'
    })
})

app.listen(8000, () => {
    console.log("Server running on port 8000")
})

connectDB().then(() => {
    console.log('MongoDB connected')
})