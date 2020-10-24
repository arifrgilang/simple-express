const Visitor = require('../models/visitor.model')
const sendResponse = require('../utils/formatResponse')
const mongoose = require('mongoose')

module.exports = {
    getAllVisitor: (req, res) => {
        // db transaction implementation
        Visitor.find({}).then( result => {
            sendResponse(res, 200, result, "Success fetching all visitors")
        }).catch( err => {
            sendResponse(res, 500, [], err.message)
        })
    },
    getVisitor: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Visitor.findById(param)
        .then( result => {
            sendResponse(res, 200, result, "Success fetching specified visitor")
        }).catch( err => {
            sendResponse(res, 500, [], err.message)
        })
    },
    postVisitor: (req, res) => {
        // db transaction implementation
        Visitor.create({
            npm: req.body.npm,
            name: req.body.name,
            faculty: req.body.faculty,
            major: req.body.major
        }).then( visitor => {
            sendResponse(res, 201, visitor, "New Visitor added!")
        }).catch( err => {
            sendResponse(res, 400, {}, err.message)
        })
    },
    putVisitor: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Visitor.findByIdAndUpdate(param, {
            npm: req.body.npm,
            name: req.body.name,
            faculty: req.body.faculty,
            major: req.body.major
        }).then( result => {
            if(Object.keys(result).length > 0) {
                sendResponse(res, 200, result, "Visitor successfully updated")
            } else {
                sendResponse(res, 500, {}, "Failed to update visitor")
            }
        }).catch( err => {
            sendResponse(res, 500, {}, err.message)
        })
    }, 
    deleteVisitor: (req, res) => {
        // db transaction implementation
        let param = req.params.id

        Visitor.findById(param)
        .then( visitor => {
            Visitor.deleteOne({
                _id: param
            }).orFail()
            .then( result => {
                sendResponse(res, 200, {}, "Visitor successfully deleted")
            }).catch( err => {
                sendResponse(res, 500, {}, "Failed to delete visitor")
            })
        }).catch( err => {
            sendResponse(res, 500, {}, `Failed to delete visitor: ${err.message}`)
        })
    }
}