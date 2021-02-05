import { Service, Inject } from "typedi";
import { IContact } from "../models/contact";

export interface IContactRepository {
  create(contact: IContact): Promise<IContact>;
  updateById(id: number, props: keyof IContact): Promise<IContact>;
  findById(id: number): Promise<IContact>;
}

@Service()
export class ContactRepository implements IContactRepository {
  constructor(@Inject("contactModel") private contactModel) {}

  create(props: IContact): Promise<IContact> {
    const phones = this.contactModel.associations.phones;
    return this.contactModel.create(props, { include: [phones] });
  }

  findById(id: number): Promise<IContact> {
    const phones = this.contactModel.associations.phones;
    return this.contactModel.findByPk(id, { include: [phones]});
  }

  updateById(id: number, props: keyof IContact) {
    return this.contactModel.update(props, {
      where: { id },
    });
  }
}
