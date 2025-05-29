const ex=require("express");
const router = ex.Router();
const Vehicles=require("../models/Myvehicles");
const User = require("../models/User");



//create data 
router.post("/api/add_vehicle",async(req,res)=>{
    try {
        const Newvehicle= await Vehicles.create(req.body.userID)
        console.log(req);
    
        res.json(Newvehicle);
        
    } catch (error) {
        res.status(500).json(error)
    }
})



// get single data 
router.get("/:userID",async(req,res)=>{
    const userid=req.params.userID
    try {
        const u = await  User.findById(userid)
        console.log(u);
        res.json(u.vehicles);
    } catch (error)     {
        res.json(error);
    }
})

// get full data 
// router.get("/fetch/vehicle",async(req,res)=>{
//     try {
//         const  allvehicle= await Vehicles.find()
//         res.json(allvehicle)
        
//     } catch (error) {
//         res.json(error)
//     }
// })  

// get single and last data
// router.get("/fetch/vehicle", async (req, res) => {
//     try {
//       const lastdata = await Vehical.findOne().sort({ _id: -1 });
  
//       if (!lastdata) {
//         return res.status(404).json({ message: "No record found" });
//       }
  
//       res.json(lastdata);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       res.status(500).json({ error: "Failed to fetch data" });
//     }
//   });
   

 
// edit data 
router.put("/userid",async(req,res)=>{
    try {
        const Updatvehicle= await User.findByIdAndUpdate(    
            req.body.id,
            req.body,
        )    
        console.log(Updatvehicle);
        res.json(Updatvehicle)
        
    } catch (error) {
        res.json(error)
    }

})


module.exports = router;

