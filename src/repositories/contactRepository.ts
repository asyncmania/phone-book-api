import { Service, Inject } from "typedi";
import { IContact } from '../models/contact';




export interface IContactRepository {
  create(contact: IContact): Promise<IContact>
}

@Service()
export class ContactRepository implements IContactRepository {

  constructor(@Inject("contactModel") private ContactModel) {}

 create(props: IContact): Promise<IContact> {
    return this.ContactModel.create(props);
  }

 

}
