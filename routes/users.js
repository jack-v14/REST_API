import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const newUser = { ...user, id: uuidv4() };
    users.push(newUser);

    res.status(201).json(newUser);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    if (!foundUser) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const initialLength = users.length;
    users = users.filter(user => user.id !== id);

    if (users.length === initialLength) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
});

export default router;
