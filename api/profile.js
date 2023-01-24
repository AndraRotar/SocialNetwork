import express, { request, response } from "express";
import auth from "../middleware/auth.js";
import Profile from "../models/profile.js";
import User from "../models/user.js";
import UserModel from "../models/user.js";

import { check, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [auth, check("name", "Profile name is required").not().isEmpty()],
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array });
    }

    const { name, email } = request.body;

    try {
      const user = User.findById(request.user.id);
      const newProfile = new Profile({
        user: request.user.id,
        email: user.email,
        name: user.name,
      });

      const profile = await newProfile.save();
      response.json(profile);
    } catch (error) {
      response.status(500).send("Server error!");
    }
  }
);

router.get("/", auth, async (request, response) => {
  try {
    const profiles = await Profile.find();
    response.json(profiles);
  } catch (error) {
    response.status(500).send("Server error!");
  }
});

export default router;
