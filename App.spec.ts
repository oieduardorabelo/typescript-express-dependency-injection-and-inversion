import * as SuperTest from "supertest";
import { App } from './App';

let supertest = SuperTest.default;

test("200 GET /users", async () => {
  // @ts-ignore type safety error in tests
  let app = new App({
    user: {
      handleGetUsers: async (_req, res) => {
        res.status(200).json({ users: [] });
      }
    }
  });
  let result = await supertest(app.getApp()).get("/users");
  expect(result.statusCode).toEqual(200);
  expect(result.body).toEqual({ "users": [] });
});
