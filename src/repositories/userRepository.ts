import { Service, Inject } from "typedi";
import { IUser } from '../models/user';


export interface IUserRepository {
  create(user: IUser): Promise<IUser>
  findOne(email: string): Promise<IUser>
}

@Service()
export class UserRepository implements IUserRepository {

  constructor(@Inject("userModel") private userModel) {}

 create(props: IUser): Promise<IUser> {
    return this.userModel.create(props);
  }

  findOne(email: string): Promise<IUser> {
    return this.userModel.findOne({ where: {email}})
  }

}
