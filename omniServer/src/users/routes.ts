import * as Hapi from "hapi";
import * as Joi from "joi";
import UserController from "./user-controller";
import { IServerConfigurations } from "../configurations";

export default function(server: Hapi.Server, configs: IServerConfigurations) {

  const userController = new UserController(configs);
  server.bind(userController);

  server.route({
    method: 'GET',
    path: '/test',
    config: {
      handler: (req, res) => res({ message: 'success' }),
      tags: ['api', 'test'],
      description: 'Health Test'
    }
  });

  server.route({
    method: 'GET',
    path: '/users',
    config: {
      handler: userController.getUsers,
      tags: ['api', 'users'],
      description: 'Gets user data'
    }
  });
}
