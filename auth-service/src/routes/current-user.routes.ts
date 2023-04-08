import Express from "express";

const router = Express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

export { router as currentUserRouter };
