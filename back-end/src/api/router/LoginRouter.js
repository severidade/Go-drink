import app from "../app";
import { login } from "../service/LoginService";

const { Router } = require("express");

const loginRouter = Router()

app.use('/', login)

export default loginRouter;
