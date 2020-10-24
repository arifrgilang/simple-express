const express = require('express')
const router = express.Router()

const { 
    getAllBook,
    getBook,
    postBook,
    putBook,
    deleteBook
} = require('../controllers/book.controller')

router.get('/', getAllBook)
router.get('/:id', getBook)
router.post('/', postBook)
router.put('/:id', putBook)
router.delete('/:id', deleteBook)

module.exports = router
