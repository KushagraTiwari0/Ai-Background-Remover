import svix from "svix";
const { Webhook } = svix;

import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(
      process.env.Clerk_Webhook_Secret,
    ); 

    const evt = whook.verify(
      JSON.stringify(req.body),
      {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp":
          req.headers["svix-timestamp"],
        "svix-signature":
          req.headers["svix-signature"],
      },
    );

    const { data, type } = evt;

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
        return res.json({});
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
        return res.json({});
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({
          clerkId: data.id,
        });
        return res.json({});
      }

      default:
        return res
          .status(400)
          .json({
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

export { clerkWebhooks };
