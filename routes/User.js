const ex=require("express");
const router=ex.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");




// router.get("/",async(req,res)=>{
//     try {
//         const  alluser= await User.find()
//         res.json(alluser)
        
//     } catch (error) {
//         res.json(error)
//     }
// })  


// get single data 
router.get("/:UserID",async(req,res)=>{
    const UserID=req.params.UserID
    try {
        const u = await  User.findById(UserID)
        res.json(u);
    } catch (error)     {
        res.json(error);
    }
})

// router.get("/latest/user", async (req, res) => {
//     try {
//       const latestUser = await User.findfindOne().sort({ createdAt: -1 }).limit(1); // Get latest user
//       if (latestUser.length === 0) {
//         return res.status(404).json({ message: "No users found" });
//       }
//       res.json(latestUser); // Return only the latest user
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch latest user" });
//     }
//   });
// router.get("/latest/user", async (req, res) => {
//     try {
//       const latestUser = await User.findOne().sort({ _id: -1 }); // Sort by ObjectId (time-based)
  
//       if (!latestUser) {
//         return res.status(404).json({ message: "No users found" });
//       }
  
//       res.json(latestUser);
//     } catch (error) {
//       console.error("Error fetching latest user:", error);
//       res.status(500).json({ error: "Failed to fetch latest user" });
//     }
//   });
  
  
  
  


// create a user 
router.post("/api/add_user",async(req,res)=>{
    try {
        const Newuser= await  User.create(req.body)
        console.log(req);
    
        res.json(Newuser);
        
    } catch (error) {
        res.status(500).json(error)
    }
})



router.delete("/:UserId", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.UserId);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//update 
router.put("/userid",async(req,res)=>{
    try {
        const Updateuser= await User.findByIdAndUpdate(    
            req.body.id,
            req.body,
        )    
        console.log(Updateuser);
        res.json(Updateuser)
        
    } catch (error) {
        res.json(error)
    }

})




//login

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found. Please sign up first." });
//         }

       
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         return res.status(200).json({ message: "Login successful", token, user });  
//     } catch (error) {
//         console.error("Login Error:", error);  // Log error to see details
//         return res.status(500).json({ message: "Server error", error: error.message });
//     }
//     }
// );


router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    try {
        const user = await User.findOne({ email ,password});

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        if (!user) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful", user ,token: "node"});
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});





module.exports = router;
