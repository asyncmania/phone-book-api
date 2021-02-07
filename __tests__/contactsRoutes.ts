
import request from 'supertest'
import sequelize from '../src/loaders/db';
import { IContact } from '../src/models/contact';
import { contacts } from '../src/__mocks__/mockContactsRepository';
import { users } from '../src/__mocks__/mockUsersRepository';





const app = `http://localhost:3600`;

beforeEach(async () => {
 await sequelize.query(`DELETE FROM contacts`, null)
})

afterAll(() => sequelize.close())


describe('Contact Routes', () => {

  test('reaching any contact without credentials should return 401', async () => {
    
    await request(app)
      .post('/api/contacts')
      .expect(401)

  })


  test('Adding a contact with credentials', async () => {

    const contact: IContact = contacts[0]
    const token = Buffer.from(`${users[0].email}:${users[0].password}`).toString("base64")
     const response = await request(app)
     .post('/api/contacts')
     .set('Authorization', `Basic ${token}`)
     .send(contact)
     .expect(201)
     .expect('Content-Type', /json/)


     expect(response.body).toMatchObject(contact)
  })


})