import Express from "express";

const router = Express.Router();

router.post("/api/users/signout", (req, res) => {
  res.send("Hi there signout!");
});

export { router as signoutRoutes };
