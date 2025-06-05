const Poll = require('../models/pollModel');

// Create new poll
exports.createPoll = async (req, res) => {
  const { question, options } = req.body;

  try {
    const poll = new Poll({
      question,
      options: options.map(text => ({ text }))
    });

    const savedPoll = await poll.save();
    res.status(201).json(savedPoll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Vote
exports.vote = async (req, res) => {
  const { pollId, optionIndex } = req.body;

  try {
    const poll = await Poll.findById(pollId);
    if (!poll) return res.status(404).json({ message: 'Poll not found' });

    poll.options[optionIndex].votes += 1;
    await poll.save();

    res.json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all polls
exports.getPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
