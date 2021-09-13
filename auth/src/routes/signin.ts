import express from "express";

const router = express.Router();

router.post("/api/auth/signin", (req, res) => {
  res.send("hey");
});

export { router as signinRouter };
