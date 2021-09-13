import express from "express";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";

const PORT: number = 3000;

const app = express();

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
