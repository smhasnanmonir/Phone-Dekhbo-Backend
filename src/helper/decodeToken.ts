// jwt.verify(props, "messi20244") as JwtPayload;

import jwt, { JwtPayload } from "jsonwebtoken";

export const decodeToken = (props: string, secret: string) => {
  return jwt.verify(props, secret);
};
