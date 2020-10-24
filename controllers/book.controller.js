const Book = require('../models/book.model')
const sendResponse = require('../utils/formatResponse')
const mongoose = require('mongoose')

module.exports = {
    getAllBook: (req, res) => {
        // db transaction implementation
        Book.find({}).then( result => {
            sendResponse(res, 200, result, "Success fetching all books")
        }).catch( err => {
            sendResponse(res, 500, [], err.message)
        })
    },
    getBook: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Book.findById(param)
        .then( result => {
            sendResponse(res, 200, result, "Success fetching specified book")
        }).catch( err => {
            sendResponse(res, 500, [], err.message)
        })
    },
    postBook: (req, res) => {
        // db transaction implementation
        Book.create({
            isbn: req.body.isbn,
            book_title: req.body.book_title,
            author: req.body.author,
            publisher: req.body.publisher
        }).then( book => {
            sendResponse(res, 201, book, "New book added!")
        }).catch( err => {
            sendResponse(res, 400, {}, err.message)
        })
    },
    putBook: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Book.findByIdAndUpdate(param, {
            isbn: req.body.isbn,
            book_title: req.body.book_title,
            author: req.body.author,
            publisher: req.body.publisher
        }).then( result => {
            if(Object.keys(result).length > 0) {
                sendResponse(res, 200, result, "Book successfully updated")
            } else {
                sendResponse(res, 500, {}, "Failed to update book")
            }
        }).catch( err => {
            sendResponse(res, 500, {}, err.message)
        })
    }, 
    deleteBook: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Book.findById(param)
        .then( book => {
            Book.deleteOne({
                _id: param
            }).orFail()
            .then( result => {
                sendResponse(res, 200, {}, "Book successfully deleted")
            }).catch( err => {
                sendResponse(res, 500, {}, "Failed to delete book")
            })
        }).catch( err => {
            sendResponse(res, 500, {}, `Failed to delete book: ${err.message}`)
        })
    }
}