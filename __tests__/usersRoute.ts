
import request from 'supertest'
import sequelize from '../src/loaders/db';
import { IUser } from '../src/models/user';
import { hashPassword } from '../src/utils/utils';
//import app from '../src/app'

import { users } from '../src/__mocks__/mockUsersControllers'


const app = `http://localhost:3500`;

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