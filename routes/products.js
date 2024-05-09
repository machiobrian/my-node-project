const express = require('express')
const router = express.Router()
router.use(express.json())

const products = [
    {
        id : 1,
        item : "book"
    },
    {
        id : 5,
        item : "cup"
    }
]

// define the product/(s) route(s)
/*
router.get('/', (req, res) => {
    res.send('the products main route')
})
router.get('/101', (req, res) => {
    res.send('product/101')
})
router.get('/102', (req, res) => {
    res.send('product/102')
})
*/

router.get("/", (req, res) => {
    res.json(products)
})

router.get("/:id", (req, res) => {
    const results = products.filter(products => products.id == req.params.id)
    res.json(results)
})
module.exports = router