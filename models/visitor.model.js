const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisitorSchema = new Schema({
    npm: String,
    name: String,
    faculty: String,
    major: String
})

const Visitor = mongoose.model("Visitor", VisitorSchema, "Visitor")

module.exports = Visitor