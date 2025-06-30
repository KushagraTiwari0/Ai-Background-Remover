import express from "express";
import { clerkWebhooks, userCredits } from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

// Clerk webhook route
userRouter.post("/webhooks", clerkWebhooks);
userRouter.get("/credits",authUser,userCredits)

export default userRouter;
