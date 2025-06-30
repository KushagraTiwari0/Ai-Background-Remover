import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorised – token missing",
      });
    }

    // decode (or verify) the Clerk JWT
    const decoded = jwt.decode(token);

    if (
      !decoded ||
      !(decoded.clerkId || decoded.sub)
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid token payload",
      });
    }

    // 🔑  Prefer a custom claim if you added one; fall back to `sub`
    req.clerkId = decoded.clerkId || decoded.sub;

    return next();
  } catch (error) {
    console.error(
      "authUser error:",
      error.message,
    );
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
