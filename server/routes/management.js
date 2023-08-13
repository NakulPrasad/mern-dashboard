import express from 'express';
import { addUser, getUsers, deleteUser, editUser } from '../controllers/management.js';


const router = express.Router();
router.post('/adduser', addUser)
router.get('/users', getUsers)
router.put('/edit/user/:id', editUser);
router.delete('/edit/user/:id', deleteUser);

export default router;