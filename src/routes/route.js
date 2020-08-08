const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controller/index.controller');

router.get('/api/users', getUsers);
router.get('/api/users/:id',getUserById);
router.post('/api/users',createUser);
router.delete('/api/users/:id',deleteUser);
router.put('/api/users/:id', updateUser);

module.exports = router;