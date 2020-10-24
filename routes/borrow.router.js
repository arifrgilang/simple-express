const express = require('express')
const router = express.Router()

const { 
    getAllBorrow,
    getBorrow,
    postBorrow,
    putBorrow,
    deleteBorrow
} = require('../controllers/borrow.controller')

router.get('/', getAllBorrow)
router.get('/:id', getBorrow)
router.post('/', postBorrow)
router.put('/:id', putBorrow)
router.delete('/:id', deleteBorrow)

module.exports = router