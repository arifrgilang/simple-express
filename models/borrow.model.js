const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BorrowSchema = new Schema({
    id: String,
    npm: String,
    isbn: String,
    borrow_date: String
})

const Borrow = mongoose.model("Borrow", BorrowSchema, "Borrow")

module.exports = Borrow