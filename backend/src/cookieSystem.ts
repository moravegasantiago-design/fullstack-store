import jwt from "jsonwebtoken";
import { Response } from "express";
import { userProps } from "./server";
type createProps = {
  res: Response;
  user: userProps;
  SECRET_KEY: string;
};
export const createToken = (props: createProps) => {
  const { res, user, SECRET_KEY } = props;
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "24h",
  });
  res.cookie("token", token, {
    //proteccion para que frontend pueda acceder a cookies
    httpOnly: true,
    secure: false,
    // false: HTTP, true: solo HTTPS
    sameSite: "lax",
    // Protege contra CSRF, permite navegación normal
    maxAge: 24 * 60 * 60 * 1000,
    // Expira en 24 horas (milisegundos)
  });
};
