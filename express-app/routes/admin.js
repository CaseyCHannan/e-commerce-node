const express = require('express')

const router = express.Router();

router

router.get('/add-product', (req, res, next ) => {
    console.log("expressivo")
    // res.send('<h1> So, you want to add a product?</h1>')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})
router.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;