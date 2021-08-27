interface IUser {
  name: string;
  email: string;
}

export interface IUserRepo {
  getUsers (): Promise<IUser[]>
}

export class UserRepo implements IUserRepo {
  constructor () {}

  async getUsers (): Promise<IUser[]> {
    return [
      {
        name: "John",
        email: "john@example.com"
      },
      {
        name: "Doe",
        email: "doe@example.com"
      }
    ]
  }
}
