import * as Hapi from "hapi";
import { IServerConfigurations } from "../configurations";
import { API_GATEWAY_HOST, ACTIONS } from '../resources/constants/server.constants';
import { createRequest } from '../resources/utils/createRequest';

export default class UserController {

  private configs: IServerConfigurations;

  constructor(configs: IServerConfigurations) {
    this.configs = configs;
  }

  public getUsers(request: Hapi.Request, reply: Hapi.ReplyNoContinue): void {
    createRequest(API_GATEWAY_HOST, ACTIONS[ACTIONS.GET])
      .then((data) => {
        reply(data);
      });
  }
}
