import { Service, Inject } from "typedi";
import { IUser } from '../models/user';


export interface IUserRepository {
  create(user: IUser): IUser
  findOne(email: string): IUser
}

@Service()
export class UserRepository implements IUserRepository {
  
  constructor(@Inject("userModel") private userModel) {}

 create(props: IUser) {
    return this.userModel.create(props);
  }

  findOne(email: string){
    return this.userModel.findOne({ where: {email}})
  }

}
