import { Router } from "express";
import Container from "typedi";
import { ContactsController } from '../controllers/contactsController';
import { ContactRepository } from '../repositories/contactRepository';



export default (router: Router): void => {

  const contactsController = new ContactsController(Container.get(ContactRepository));

  router.get("/contacts", contactsController.findAll.bind(contactsController));
  router.post("/contacts", contactsController.create.bind(contactsController));
  router.patch("/contacts/:id", contactsController.update.bind(contactsController))
  router.delete('/contacts/:id', contactsController.delete.bind(contactsController) )
};
