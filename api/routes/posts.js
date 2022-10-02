import express from "express";

const router = express.Router();

router.get("/", (res, req) => {
  res.json("This is a Post !");
});

export default router;
