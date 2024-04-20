const express = require('express')
const route = express.Router()
const HomeController = require('../Controller/Home/home')
route.get('/',HomeController.index)

module.exports = route