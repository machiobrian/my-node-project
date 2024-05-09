const express = require('express')
const router = express.Router()

// define the product/(s) route(s)
router.get('/', (req, res) => {
    res.send('the products main route')
})
router.get('/101', (req, res) => {
    res.send('product/101')
})
router.get('/102', (req, res) => {
    res.send('product/102')
})

module.exports = router