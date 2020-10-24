const mongoose = require('mongoose')

const connectDB = () => {
    const dbURI = "mongodb://localhost:27017/perpus"
    return mongoose.connect(dbURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = connectDB
