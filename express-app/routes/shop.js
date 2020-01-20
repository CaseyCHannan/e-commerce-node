const path = require('path')

const rootDir = require('../utils/pathdir')

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next ) => {
    console.log("molt0 expressivo")
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router

