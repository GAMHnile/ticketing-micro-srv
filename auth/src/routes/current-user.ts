import express from "express";

const router = express.Router();

router.post("/api/auth/currentuser", (req, res) => {
  res.send("hey");
});

export { router as currentUserRouter };
