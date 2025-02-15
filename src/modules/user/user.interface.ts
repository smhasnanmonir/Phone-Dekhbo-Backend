export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  image: string;
  comments: string[];
}

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
