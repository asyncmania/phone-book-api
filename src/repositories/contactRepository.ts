import { Service, Inject } from "typedi";
import { IContact } from "../models/contact";

export interface IContactRepository {
  create(contact: IContact): Promise<IContact>;
  findAll(sortBy: string,
  orderBy: sortBy,
  limit: number,
  offset: number): Promise<IContact[]>;
  updateById(id: number, props: IContact): Promise<IContact>;
  findById(id: number): Promise<IContact>;
  deleteById(id: number): Promise<void>;
}


type sortBy = "desc" | "asc";

@Service()
export class ContactRepository implements IContactRepository {
  constructor(@Inject("contactModel") private contactModel) {}

  create(props: IContact): Promise<IContact> {
    const phones = this.contactModel.associations.phones;
    return this.contactModel.create(props, { include: [phones] });
  }

  findAll(
    sortBy: string = "createdAt",
    orderBy: sortBy = "desc",
    limit: number = 10,
    offset: number = 0
  ) {
    const phones = this.contactModel.associations.phones;
    return this.contactModel.findAll({
      include: [phones],
      order: [[sortBy, orderBy]],
      limit: Number(limit),
      offset: Number(offset)
    });
  }

  findById(id: number): Promise<IContact> {
    const phones = this.contactModel.associations.phones;
    return this.contactModel.findByPk(id, { include: [phones] });
  }

  updateById(id: number, props:IContact): Promise<IContact> {
    return this.contactModel.update(props, {
      where: { id },
    });
  }

  deleteById(id: number): Promise<void> {
    return this.contactModel.destroy({ where: { id } });
  }
}
