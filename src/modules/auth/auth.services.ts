import prisma from "../../shared/prisma";
import { IAuth } from "./auth.interface";

const userLoginService = async (props: IAuth) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: props.email,
      password: props.password,
    },
  });
  return user;
};

export const userAuthServices = {
  userLoginService,
};
