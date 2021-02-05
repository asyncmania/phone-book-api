import { Router } from "express";
import Container from "typedi";
import { ContactsController } from '../controllers/contactsController';
import { ContactRepository } from '../repositories/contactRepository';



export default (router: Router): void => {

  const contactsController = new ContactsController(Container.get(ContactRepository));

  router.post("/contacts", contactsController.create.bind(contactsController));
  router.patch("/contacts/:id", contactsController.update.bind(contactsController))
};
