const express = require('express')
const router = express.Router()
router.use(express.json())

const userLocation = [
    {
        id : 1,
        location: "mombasa"
    },
    {
        id : 2,
        location : "nairobi"
    }
]

router.get("/", (req, res) => {
    res.json(userLocation)
})

router.get("/:id", (req, res) => {
    const results = userLocation.filter(userLocation => userLocation.id == req.params.id)
    res.json(results)
})

module.exports = router