import * as Hapi from "hapi";
import { IServerConfigurations } from "./configurations";
import * as Users from "./users";


export function init(configs: IServerConfigurations): Promise<Hapi.Server> {
  return new Promise<Hapi.Server>(resolve => {

    const port = process.env.PORT || configs.port;
    const server = new Hapi.Server();

    server.connection({
      port: port,
      routes: {
        cors: true
      }
    });

    server.register(require('hapi-async-handler'));


    if (configs.routePrefix) {
      server.realm.modifiers.route.prefix = configs.routePrefix;
    }
    Users.init(server, configs);
    resolve(server);
  });
}
