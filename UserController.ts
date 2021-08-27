import * as express from "express";

import { IUserRepo } from "./UserRepo";

export interface IUserController {
  handleGetUsers(req: express.Request, res: express.Response): Promise<void>
};

export class UserController implements IUserController {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
    this.handleGetUsers = this.handleGetUsers.bind(this);
  }

  async handleGetUsers(_req: express.Request, res: express.Response): Promise<void> {
    const users = await this.userRepo.getUsers();
    res.status(200).json({ users });
  }
}
