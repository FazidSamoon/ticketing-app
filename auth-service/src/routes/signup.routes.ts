import Express, {Request, Response} from "express";
import { body, validationResult } from "express-validator";

const router = Express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be provided"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }
    const { email, password } = req.body;

    console.log("Creating a user...");

    res.send({"message": "User created with email ", email});
  }
);

export { router as signupRoutes };
