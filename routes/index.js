const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', { title: 'A' })
  // res.send('hi') //사용시 body부분을 send로 바꿈
})

module.exports = router
