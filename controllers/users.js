import { v4 as uuidv4 } from 'uuid';

let users = [];
export const getUsers = (req, res) => {
    res.json(users);
}
export const addUser = (req, res) => {
    const user = req.body;

    const newUser = { ...user, id: uuidv4() };
    users.push(newUser);

    res.status(201).json(newUser);
}
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    if (!foundUser) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(foundUser);
}
export const deleteuser = (req, res) => {
    const { id } = req.params;

    const initialLength = users.length;
    users = users.filter(user => user.id !== id);

    if (users.length === initialLength) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
}
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (firstName !== undefined) {
        user.firstName = firstName;
    }

    if (lastName !== undefined) {
        user.lastName = lastName;
    }

    if (age !== undefined) {
        user.age = age;
    }

    res.status(200).json({
        message: 'User updated successfully',
        user
    });
}