import * as express from "express";

import { ITopLevelController } from './TopLevelController';
import { IUserController } from './UserController';

let { PORT, NODE_ENV } = process.env;

interface IAppControllers {
  topLevel: ITopLevelController,
  user: IUserController
}

export class App {
  private name: string;
  private app: express.Application;

  constructor(controllers: IAppControllers) {
    this.name = `MYAPP-${NODE_ENV}`;
    this.app = express.default();

    this.app.use('/users', controllers.user.handleGetUsers);
    this.app.use('/', controllers.topLevel.handleGet);
  }

  getApp() {
    return this.app;
  }

  start() {
    this.app.listen(Number(PORT), () => {
      console.log(`[${this.name}] Running on [::${PORT}]`);
    });
  }
}
