import express from "express";

const router = express.Router();

router.post("/api/auth/signout", (req, res) => {
  res.send("hey");
});

export { router as signoutRouter };