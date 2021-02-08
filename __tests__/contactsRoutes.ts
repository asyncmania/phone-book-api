
import request from 'supertest'
import sequelize from '../src/loaders/db';
import { IContact } from '../src/models/contact';
import { contacts } from '../src/__mocks__/mockContactsRepository';
import { users } from '../src/__mocks__/mockUsersRepository';
import config from "../src/config";




const app = `http://localhost:${config.port}`;

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


  test('Updating a contact', async () => {
    const contact: IContact = contacts[0]
    const token = Buffer.from(`${users[0].email}:${users[0].password}`).toString("base64")
    const response = await request(app)
    .patch('/api/contacts/5')
    .set('Authorization', `Basic ${token}`)
    .send({email: "toal@yahoo.com"})
    .expect(200)
    .expect('Content-Type', /json/)

  })


})