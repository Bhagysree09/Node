const express = require('express');
const router = express.Router();
const User = require('../model/user');
const { createUser, getUser, getUserByWork, updateUser, deleteUser, login } = require('../controller/user');
router.post('/user', createUser )
router.post('/login', login)
router.get('/user', getUser)

router.get('/user/:workType',getUserByWork )

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)



module.exports = router;
