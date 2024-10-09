const express = require('express');
const { signUp, login, deleteUser } = require('../controllers/user.controller');
const { validateUserData } = require('../middlewares/user.middleware');
const router = express.Router();


router.post('/user/signup', validateUserData, signUp);


router.post('/user/login', login);


router.delete('/user/delete/:id', deleteUser);

module.exports = router;
