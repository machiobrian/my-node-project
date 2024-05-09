// routes/users.js

const express = require('express')
const router = express.Router()
router.use(express.json())

const users = [{
    'id' : 1,
    'name' : 'Jack',
    'age' : 24
},
{
    'id' : 2,
    'name' : 'Machio',
    'age' : 23
},
{
    'id' : 4,
    'name' : 'Braen',
    'age' : 20
}]

// define a route
/*
router.get('/', (req, res) => {
    res.send('this is the user route') // http://.../user
})
router.get('/101', (req, res) => {
    res.send('this is user 101 route') // http://.../user/101
})
router.get('/102', (req, res) => {
    res.send('this is user/102 route')
})
*/
router.get('/', (req, res) => {
    res.json(users)
})

router.get("/:id", (req, res) => {
    const results = users.filter(user => user.id == req.params.id)
    res.json(results)
})

router.post("/", (req, res) => {
    const {id, name, age} = req.body
    users.push({id, name, age})
    res.json(
        {
            success : true,
            message : "added successfully"
        }
    )
})

router.put("/", (req, res) => {
    const {id, new_name} = req.body
    users[id-1].name = new_name
    res.json({
        success : true,
        message : 'updated'
    })
})


module.exports = router // we export so that the server.js can use it