import express from "express";
import Thread from "../models/Thread.js";
import responseGenai from "../utils/genai.js";

const router = express.Router();

//Get all the threads
router.get("/thread", async (req, res) => {
  try {
    // Get all thread and convert into accending order
    const thread = await Thread.find({}).sort({ createdAt: -1 });
    res.json(thread);
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

// Get thread messages
router.get("/thread/:threadid", async (req, res) => {
  const { id } = req.params;
  try {
    const thread = await Thread.findOne({ id });
    if (!thread) {
      res.status(404).json({ msg: "Not found" });
    } else {
      res.json(thread.message);
    }
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

// Delete a thread
router.delete("/thread/:threadid", async (req, res) => {
  const { id } = req.params;
  try {
    const dltThread = await Thread.findOneAndDelete({ id });
    if (!dltThread) {
      res.status(404).json({ msg: "Not found" });
    } else {
      res.send("Successfully delete");
    }
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

// Chat rout

router.post("/chat", async (req, res) => {
  const { threadId, message } = req.body;
  if (!threadId || !message) {
    res.status(500).json({ error: "Missing Something" });
  }
  try {
    let thread = await Thread.findOne({threadId});

    if (!thread) {
      thread = new Thread({
        threadId,
        title: message,
        message: [{ role: "user", content: message }],
      });
    } else {
      thread.message.push({ role: "user", content: message });
    }
    const modelReply = await responseGenai(message);
    thread.message.push({ role: "model", content: modelReply });
    thread.updatedAt = new Date();

    await thread.save();
    res.json({ model : modelReply });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Something wrong" });
  }
});



export default router;
