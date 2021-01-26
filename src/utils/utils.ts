import crypto from "crypto";
import Container from "typedi";
import { UserRepository } from "../repositories/userRepository";

export const hashPassword = (password: string): string => {
  const hash = crypto.createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
};

export const credentialsAreValid = async (email: string, password: string) => {
  const user = await Container.get(UserRepository).findOne(email);

  if (!user || hashPassword(password) !== user.password) {
    return false;
  }

  return user;
};
