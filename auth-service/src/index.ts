import Express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user.routes";
import { signinRouter } from "./routes/signin.routes";
import { signoutRoutes } from "./routes/signout.routes";
import { signupRoutes } from "./routes/signup.routes";

const app = Express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRoutes);
app.use(signupRoutes);

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})