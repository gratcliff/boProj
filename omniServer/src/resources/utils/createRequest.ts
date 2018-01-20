import * as http from 'http';
import * as Promise from 'bluebird'; // Only importing promise lib due to type failures. Known bug.
import * as REQUEST from 'request-promise';

export function createRequest(host: string, action: string, payload?: any): Promise<any> {
  const reqOptions = {
    method: action,
    uri: `${host}users`,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return REQUEST(reqOptions);
}
