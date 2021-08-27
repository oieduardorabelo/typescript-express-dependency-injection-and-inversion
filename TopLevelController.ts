import * as express from "express";

export interface ITopLevelController {
  handleGet(req: express.Request, res: express.Response): Promise<void>;
}

export class TopLevelController implements ITopLevelController {
  constructor() {
    this.handleGet = this.handleGet.bind(this);
  }

  async handleGet(_req: express.Request, res: express.Response): Promise<void> {
    res.status(200).json({ ok: true, message: "It is working!" });
  }
}
