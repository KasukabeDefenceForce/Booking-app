import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  req.send("hello, this is auth endpoint");
});

router.get("/register", (req, res) => {
  req.send("hello, this is auth register endpoint");
});

export default router;
