import express, { request, response } from "express";

const router = express.Router();

router.get("/", (request, response) => response.send("Test Profile Route"));

export default router;
