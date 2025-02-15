import isUserExist from "../../middlwares/isUserExists";
import prisma from "../../shared/prisma";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";

const userCreateService = async (props: IUser) => {
  const salt = process.env.SALT;
  const hashedPassword: string = await bcrypt.hash(
    props.password,
    Number(salt)
  );
  if (await isUserExist(props.email, props.username)) {
    throw new Error("User already exists!");
  }
  const result = await prisma.user.create({
    data: {
      username: props.username,
      name: props.name,
      email: props.email,
      password: hashedPassword,
      role: props.role,
      image: props.image,
    },
  });
  return result;
};

export const userService = {
  userCreateService,
};
