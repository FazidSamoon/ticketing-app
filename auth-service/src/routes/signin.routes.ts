import Express from "express";

const router = Express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("Hi there signin!");
});

export { router as signinRouter };
