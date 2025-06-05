const Suggestion =require("../models/suggestion");


exports.createSuggestion =async(req,res)=>{
    const { user, message } = req.body;
    try {
    const suggestion = new Suggestion({ user, message });
    const savedSuggestion = await suggestion.save();
    res.status(201).json(savedSuggestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



// Get all suggestions
exports.getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ createdAt: -1 });
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};







