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
  const { email, id, name, created_at } = user;
  const token = jwt.sign(
    { id: id, name: name, email: email, created_at: created_at },
    SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
  res.cookie("token", token, {
    //proteccion para que frontend pueda acceder a cookies
    httpOnly: true,
    secure: true,
    // false: HTTP, true: solo HTTPS
    sameSite: "none",
    // Protege contra CSRF, permite navegación normal
    maxAge: 24 * 60 * 60 * 1000,
    // Expira en 24 horas (milisegundos)
  });
};
