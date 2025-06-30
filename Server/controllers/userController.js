import svix from "svix";
const { Webhook } = svix;

import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(
      process.env.CLERK_WEBHOOK_SECRET,
    );

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp":
        req.headers["svix-timestamp"],
      "svix-signature":
        req.headers["svix-signature"],
    });

    const { data, type } = req.body;

   

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email:
            data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModel.create(userData);
        res.json({});
        break;
      }

      case "user.updated": {
        const userData = {
          email:
            data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModel.findOneAndUpdate(
          { clerkId: data.id },
          userData,
        );
        res.json({});
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({
          clerkId: data.id,
        });
        
        res.json({});
        break;
      }

      default:
        return res.status(400).json({
          message: "Unhandled event type",
        });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



//API controller
const userCredits = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    if (!clerkId) {
      return res.status(401).json({
        success: false,
        message: "Missing clerkId in request",
      });
    }

    const userData = await userModel.findOne({
      clerkId,
    });

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      credits: userData.creditBalance,
    });
  } catch (error) {
    console.error(
      "Credits error:",
      error.message,
    );
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export { clerkWebhooks,userCredits };
