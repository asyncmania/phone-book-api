import { Router } from "express";
import Container from "typedi";
import { ContactsController } from "../controllers/contactsController";
import { catchAsync } from "../errors/error.handler";
import { requireAuth } from "../middlewares/requireAuth";
import { ContactRepository } from "../repositories/contactRepository";

export default (router: Router): void => {
  const contactsController = new ContactsController(
    Container.get(ContactRepository)
  );

  router.use(requireAuth);

  router.get(
    "/contacts",
    catchAsync(contactsController.findAll.bind(contactsController))
  );
  router.post(
    "/contacts",
    catchAsync(contactsController.create.bind(contactsController))
  );
  router.patch(
    "/contacts/:id",
    catchAsync(contactsController.update.bind(contactsController))
  );
  router.delete(
    "/contacts/:id",
    catchAsync(contactsController.delete.bind(contactsController))
  );
};
