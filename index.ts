import { App } from './App'

import { TopLevelController } from './TopLevelController';
import { UserController } from './UserController';
import { UserRepo } from './UserRepo';

let user = new UserController(new UserRepo());
let topLevel = new TopLevelController();

new App({ topLevel, user }).start();
