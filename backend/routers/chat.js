import express from "express";
import Thread from "../models/Thread.js";

const router = express.Router();

//Get all the threads
router.get("/thread", async (req, res) => {
  try {
    // Get all thread and convert into accending order
    const thread = await Thread.find({}).sort({ createdAt: -1 });
    res.json(thread);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed" });
  }
});

// Get thread messages
router.get("/thread/:threadid", async (req, res) => {
    const {id} = req.params;
    console.log(id);
  try {
    const thread = await Thread.findOne({id});
    if(!thread){
        res.status(404).json({msg:"Not found"});
    }else{
    res.json(thread.message);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed" });
  }
});

// Delete a thread 
router.delete("/thread/:threadid", async (req,res)=>{
    const {id} = req.params;
      try {
    const dltThread = await Thread.findOneAndDelete({id});
    if(!dltThread){
        res.status(404).json({msg:"Not found"});
    }else{
        res.send("Successfully delete");
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed" });
  }
})



// router.post("/test", async(req,res)=>{
//     try{
//         const sample = new Thread({
//             threadId:"122rr",
//             title:"Sample2",
//         })
//         const response = await sample.save();
//         res.send(response);
//     }catch(err){
//         console.log(err);
//         res.send("Error");
//     }
// })

export default router;
