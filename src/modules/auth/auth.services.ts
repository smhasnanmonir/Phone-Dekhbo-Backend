import prisma from "../../shared/prisma";
import { generateToken } from "./auth.helper";
import { IAuth } from "./auth.interface";

import bcrypt from "bcrypt";

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

export const userAuthServices = {
  userLoginService,
};
