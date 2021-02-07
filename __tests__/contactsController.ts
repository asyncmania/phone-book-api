import { Request, Response } from "express";
import { ContactsController } from "../src/controllers/contactsController";
import { IContact } from "../src/models/contact";
import {
  MockContactsRepository,
  contacts,
} from "../src/__mocks__/mockContactsRepository";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("contacts Controller", () => {
  let contactsController: ContactsController;

  beforeAll(() => {
    contactsController = new ContactsController(new MockContactsRepository());
  });

  test("Adding Contact", async () => {
    const mockRequest = (contact: IContact) => {
      return {
        body: contact,
      } as Request;
    };

    const req: Request = mockRequest(contacts[0]);
    const res: Response = mockResponse();

    await contactsController.create(req, res, null);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  test("updating Contact", async () => {
    const updates = { email: "sanya@gmail.com" };

    const mockRequest = (id: string, data: any) => {
      const req = {} as Request;
      req.params = { id };
      req.body = data;
      return req;
    };

    const req: Request = mockRequest("5", updates);
    const res: Response = mockResponse();

    await contactsController.update(req, res, null);
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ message: `Contact updated successfully`});
  });

  test("Find all contacts", async () => {
    const mockRequest = () => {
      return {
        query: {},
      } as Request;
    };
    const req:Request = mockRequest();
    const res:Response = mockResponse();
    await contactsController.findAll(req, res, null);
    expect(res.send).toHaveBeenCalledWith(contacts);
  });
});
