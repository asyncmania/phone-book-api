
import request from 'supertest'
import sequelize from '../src/loaders/db';
import { IUser } from '../src/models/user';
import { hashPassword } from '../src/utils/utils';
import config from "../src/config";

import { users } from '../src/__mocks__/mockUsersRepository'


const app = `http://localhost:${config.port}`;


beforeEach(async () => {
 await sequelize.query(`DELETE FROM users`, null)
})


afterAll(() => sequelize.close())

describe('Users Registrtion Route', () => {

  test('Registration', async () => {

    const user:IUser = users[0]

    const response = await request(app)
      .post('/api/register')
      .send(user)
      .expect(201)
      .expect("content-type", /json/);

      expect(response.body).toMatchObject({...user, password: hashPassword(user.password)})
  })

})