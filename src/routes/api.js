const express = require('express');

const UsersController = require('../controllers/Users/UsersController')

const router = express.Router()


// User
router.post('/UserOTP/:email',UsersController.UserOTP)
router.post('/VerifyLogin/:email/:otp',UsersController.VerifyLogin)






module.exports = router;