import { IContact } from "../models/contact";
import { IContactRepository } from "../repositories/contactRepository";

export const contacts: IContact[] = [
  {
    id:5,
    name: "Jossy",
    address: "somehere in toronto canada!",
    email: "anotheremail@josiah.com",
    phones: [
      {
        type: "home",
        number: "0903738377",
      },
      {
        type: "home",
        number: "0903738377",
      },
    ],
  },
];

export class MockContactsRepository implements IContactRepository {

  private contacts: IContact[] = contacts

  async create(contact: IContact): Promise<IContact> {
    return contact;
  }

  async findById(id: number): Promise<IContact> {
    return this.contacts.find((contact) => id === contact.id)
  }

  async updateById(id: number, props: IContact): Promise<IContact> {
      const contact = await this.findById(id)
      return {...contact, ...props }
  }

  async deleteById(id: number): Promise<void> {
    this.contacts.filter(contact => id !== contact.id)
  }

  async findAll(): Promise<IContact[]> {
    return this.contacts
  }


}
