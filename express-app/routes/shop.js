const express = require('express')

const router = express.Router()

router.get('/', (req, res, next ) => {
    console.log("molt0 expressivo")
    res.send('<h1> Hello from simple express app</h1>')
})

module.exports = router

