import express from "express";
import { clerkWebhooks } from "../controllers/userController.js";

const userRouter = express.Router();

// Clerk webhook route
userRouter.post("/webhook", clerkWebhooks);

export default userRouter;
