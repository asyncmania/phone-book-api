import { NextFunction, Request, Response } from "express";
import { IContact } from "../models/contact";
import {
  ContactRepository,
  IContactRepository,
} from "../repositories/contactRepository";

export class ContactsController {
  private contactRepository: IContactRepository;

  constructor(contactRepository: IContactRepository) {
    this.contactRepository = contactRepository;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const contact = await this.contactRepository.create(req.body);
    res.status(201).send(contact);
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = Number(req.params.id);
    await this.contactRepository.updateById(id, req.body);
    res.send(await this.contactRepository.findById(id));
  }
}
