import { Router } from "express";
import Container from "typedi";
import { UsersController } from "../controllers/usersController";
import { catchAsync } from "../errors/error.handler";
import { UserRepository } from "../repositories/userRepository";

export default (router: Router): void => {
  const usersController = new UsersController(Container.get(UserRepository));

  router.post(
    "/register",
    catchAsync(usersController.register.bind(usersController))
  );
};
