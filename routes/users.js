// routes/users.js

const express = require('express')
const router = express.Router()

// define a route

router.get('/', (req, res) => {
    res.send('this is the user route') // http://.../user
})
router.get('/101', (req, res) => {
    res.send('this is user 101 route') // http://.../user/101
})
router.get('/102', (req, res) => {
    res.send('this is user/102 route')
})

module.exports = router // we export so that the server.js can use it