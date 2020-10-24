const express = require('express')
const router = express.Router()
const sendResponse = require('../utils/formatResponse')

const bookRouter = require('./book.router')
const borrowRouter = require('./borrow.router')
const visitorRouter = require('./visitor.router')

router.get('/', (req, res) => {
    sendResponse(res, 200, {}, 'API is running!')
})

router.use('/book', bookRouter)
router.use('/borrow', borrowRouter)
router.use('/visitor', visitorRouter)

module.exports = router
