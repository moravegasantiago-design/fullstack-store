import express, { Response, Request } from "express";
import cors from "cors";
import EncryptPassword, { comparePass } from "./encryptPassword";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { createToken } from "./cookieSystem";
import jwt from "jsonwebtoken";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET!;
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
export type userProps = {
  id: number;
  name: string;
  email: string;
  password: string;
};
const users: userProps[] = [];
app.post("/auth/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    res.status(401).json({ success: false });
  } else {
    const comparePassword = await comparePass({
      password: password,
      encryptPass: user.password,
    });
    if (comparePassword) {
      createToken({ res: res, user: user, SECRET_KEY: SECRET_KEY });
      res.status(200).json({ success: true });
    } else return res.status(401).json({ success: false });
  }
});
app.post("/auth/register", async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  const searchCredentials = users.find((u) => u.email === email);
  if (searchCredentials) {
    res.status(401).json({ success: false });
  } else {
    const passEncrypt = await EncryptPassword({ password: password });
    users.push({
      id: users.length + 1,
      name: name,
      email: email,
      password: passEncrypt,
    });
    res.status(200).json({ success: true });
  }
});

app.get("/me", (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    const data = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    console.error(err);
    res.status(401).json({ success: false, error: "Token invalido" });
  }
});
app.listen(3000, () => {
  console.log("Iniciando puerto");
});
