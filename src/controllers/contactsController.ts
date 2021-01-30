
import { NextFunction, Request, Response } from "express";
import { IContact } from '../models/contact';
import { ContactRepository, IContactRepository } from '../repositories/contactRepository';


export class ContactsController {

  private contactRepository: IContactRepository

  constructor(contactRepository: IContactRepository) {
    this.contactRepository = contactRepository
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
   
    const a  = await this.contactRepository.create(req.body)

    console.log(a)


  }
}