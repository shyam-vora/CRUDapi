const express=require("express");
const router=express.Router();
const suggestionController=require("../controllers/SuggestionController");


router.post('/create', suggestionController.createSuggestion);

//to get all suggestions
router.get('/get', suggestionController.getSuggestions);


module.exports=router;