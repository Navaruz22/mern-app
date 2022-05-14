const { Router } = require("express");
const auth = require("../middleware/auth.middleware.js");
const Link = require("../models/Link.js");
const router = Router();

router.post("/generate", async (req, res) => {
  try {
  } catch (error) {
    // res.status(500).json({ message: "Что-то пошло не так..." });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.json(links);
  } catch (error) {
    // res.status(500).json({ message: "Что-то пошло не так..." });
  }
});

router.get("/:id", async (req, res) => {
  const link = await Link.findById(req.params.id);
  res.json(link);
  try {
  } catch (error) {
    // res.status(500).json({ message: "Что-то пошло не так..." });
  }
});

module.exports = router;
