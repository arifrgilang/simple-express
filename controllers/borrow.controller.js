const Borrow = require('../models/borrow.model')
const sendResponse = require('../utils/formatResponse')
const mongoose = require('mongoose')

module.exports = {
    getAllBorrow: (req, res) => {
        // db transaction implementation
        Borrow.find({}).then( result => {
            sendResponse(res, 200, result, "Success fetching all borrows")
        }).catch( err => {
            sendResponse(res, 500, [], err.message)
        })
    },
    getBorrow: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Borrow.findById(param)
        .then( result => {
            sendResponse(res, 200, result, "Success fetching specified borrow")
        }).catch( err => {
            sendResponse(res, 500, [], err.message)
        })
    },
    postBorrow: (req, res) => {
        // db transaction implementation
        Borrow.create({
            id: req.body.id,
            npm: req.body.npm,
            isbn: req.body.isbn,
            borrow_date: req.body.borrow_date
        }).then( borrow => {
            sendResponse(res, 201, borrow, "New borrow added!")
        }).catch( err => {
            sendResponse(res, 400, {}, err.message)
        })
    },
    putBorrow: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Borrow.findByIdAndUpdate(param, {
            id: req.body.id,
            npm: req.body.npm,
            isbn: req.body.isbn,
            borrow_date: req.body.borrow_date
        }).then( result => {
            if(Object.keys(result).length > 0) {
                sendResponse(res, 200, result, "Borrow successfully updated")
            } else {
                sendResponse(res, 500, {}, "Failed to update borrow")
            }
        }).catch( err => {
            sendResponse(res, 500, {}, err.message)
        })
    }, 
    deleteBorrow: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Borrow.findById(param)
        .then( borrow => {
            Borrow.deleteOne({
                _id: param
            }).orFail()
            .then( result => {
                sendResponse(res, 200, {}, "Borrow successfully deleted")
            }).catch( err => {
                sendResponse(res, 500, {}, "Failed to delete borrow")
            })
        }).catch( err => {
            sendResponse(res, 500, {}, `Failed to delete borrow: ${err.message}`)
        })
    }
}