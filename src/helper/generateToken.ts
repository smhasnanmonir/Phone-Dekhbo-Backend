import jwt from "jsonwebtoken";

export const generateToken = (
  email: string,
  role: string,
  expiresIn: number,
  secret: string
) => {
  return jwt.sign(
    {
      email: email,
      role: role,
    },
    secret,
    {
      algorithm: "HS256",
      expiresIn: expiresIn,
    }
  );
};
