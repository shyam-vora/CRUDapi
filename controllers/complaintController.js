const Complaint = require('../models/complaint');

// Create complaint
exports.createComplaint = async (req, res) => {
  const { user, message } = req.body;
  try {
    const complaint = new Complaint({ user, message });
    const savedComplaint = await complaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Only admin can view all complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
