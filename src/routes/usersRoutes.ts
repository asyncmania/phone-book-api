import { Router } from "express";
import Container from "typedi";
import { UsersController } from "../controllers/usersController";
import { UserRepository } from "../repositories/userRepository";
import { credentialsAreValid } from '../utils/utils';


export default (router: Router): void => {
  const usersController = new UsersController(Container.get(UserRepository));

  router.post("/register", usersController.register.bind(usersController));
  router.post("/login", usersController.login.bind(usersController));
};
