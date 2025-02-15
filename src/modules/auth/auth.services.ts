import prisma from "../../shared/prisma";
import { IAuth } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import isUserExist from "../../middlwares/isUserExists";
import { generateToken } from "../../helper/generateToken";
import { decodeToken } from "../../helper/decodeToken";

const userLoginService = async (props: IAuth) => {
  // un-hashing password
  const salt = process.env.SALT;
  const pass = props.password;
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: props.email,
    },
  });

  // check if the password is correct or not.
  const isCorrectPassword: boolean = await bcrypt.compare(
    props.password,
    user.password
  );

  const accessToken = generateToken(user.email, user.role, 15000, "messi2024");
  const refreshToken = generateToken(
    user.email,
    user.role,
    150000,
    "messi20244"
  );

  if (isCorrectPassword) {
    return {
      email: user.email,
      role: user.role,
      accessToken,
      refreshToken,
    };
  }
};

const userCookieService = async (props: string) => {
  let decoded;
  try {
    decoded = decodeToken(props, "messi20244") as JwtPayload;
  } catch (err: unknown) {
    return "You are not authorized to access.";
  }
  const result = await isUserExist(decoded?.email);
  if (!result) {
    throw new Error("User not found");
  }
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: decoded.email,
    },
  });
  const accessToken = generateToken(user.email, user.role, 15000, "messi2024");
  return {
    accessToken,
  };
};

export const userAuthServices = {
  userLoginService,
  userCookieService,
};
