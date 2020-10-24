const express = require('express')
const router = express.Router()

const { 
    getAllVisitor,
    getVisitor,
    postVisitor,
    putVisitor,
    deleteVisitor
} = require('../controllers/visitor.controller')

router.get('/', getAllVisitor)
router.get('/:id', getVisitor)
router.post('/', postVisitor)
router.put('/:id', putVisitor)
router.delete('/:id', deleteVisitor)

module.exports = router
