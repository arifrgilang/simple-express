const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    isbn: String,
    book_title: String,
    author: String,
    publisher: String
})

const Book = mongoose.model("Book", BookSchema, "Book")

module.exports = Book