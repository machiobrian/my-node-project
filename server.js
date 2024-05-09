// create an express app server

const express = require('express')
const app = express()

// import the routers & assign them to an end point prefix
const usersRoutes = require('./routes/users')
const productsRoute = require('./routes/products')

app.get('/', (req, res) => {
    res.send('hello root node')
})

// including the user/product route files
app.use('/users', usersRoutes)
app.use('/product', productsRoute)

// define the port to serve the application routes
const port = 5000

// start the listening bit of the server
app.listen(port, () => {
    console.log(`Server is exposed in port: ${port} `)
})