const port = 2002

const express = require('express')
const app = express()
const db = require('./database')
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => {
    console.log('Middleware 1 ...')
    next()
})

app.get('/products', (req, res, next) => {
    res.send(db.getProducts())
})

app.get('/products/:id', (req, res, next) => {
   res.send(db.getProduct(req.params.id)) 
})

app.post('/products', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.put('/products/:id', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    })
    res.send(product) //JSON
})

app.delete('/products/:id', (req, res, next) => {
    const product = db.deleteProduct(req.params.id)
    res.send(product) //JSON
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
