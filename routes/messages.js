const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Message = require('../models/Message');





// Get all messages
router.get('/fetchall', fetchuser, async (req, res) => {
  try {
    const messages = await Message.find({})
      .populate('sender', 'name'); // <--- this is important!
    res.json(messages);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// POST a new message
router.post('/send', fetchuser, async (req, res) => {
  try {
    const { text } = req.body;
    const message = new Message({
      sender: req.user.id,
      text
    });
    const saved = await message.save();
    const populated = await saved.populate('sender', 'name'); // <---
    res.json(populated);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
