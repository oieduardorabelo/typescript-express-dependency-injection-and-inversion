import { UserController } from './UserController';

test("Should 200 with an empty array of users", async () => {
  let user = new UserController({
    getUsers: async () => []
  });
  let res = mockResponse();

  // @ts-ignore type safety error in tests
  await user.handleGetUsers(null, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ users: [] });
});

function mockResponse() {
  const res = {
    status: () => {},
    json: () => {}
  };
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
