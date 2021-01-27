import { NextFunction, Request, Response } from "express";
import { IUserRepository } from "../repositories/userRepository";
import { hashPassword } from "../utils/utils";

export class UsersController {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = hashPassword(password);
    const user = await this.userRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user)
  }
}
