import prisma from "../shared/prisma";

async function isUserExist(email: string, username: string): Promise<boolean> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    });
    return user !== null;
  } catch (error) {
    console.error("Error checking user existence:", error);
    return false;
  }
}

export default isUserExist;
