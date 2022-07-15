import { signupRouter } from "./routes/signupRoutes";
import app from "./services/app";

app.use('/user',signupRouter)