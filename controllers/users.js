import User from '../models/user.js';

// GET all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD user
export const addUser = async (req, res) => {
  try {
    console.log('POST /users HIT');
    console.log('BODY:', req.body);

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


// GET user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user)
      return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

// DELETE user
export const deleteuser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({ error: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

// PATCH user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user)
      return res.status(404).json({ error: 'User not found' });

    res.json({
      message: 'User updated successfully',
      user
    });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });5
  }
};
