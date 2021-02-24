import axios from 'axios';

export type LoginPayload = {
    name: string,
    password: string,
 }

class IAMAPI {
  // eslint-disable-next-line class-methods-use-this
  login(payload: LoginPayload):Promise<{data: string}> {
    if (!payload.name || !payload.password) {
      // fake api error broski :)
      return new Promise((_, reject) => {
        reject(new Error('username and password are required'));
      });
    }
    return axios.get('https://my-json-server.typicode.com/typicode/demo/profile')
      .then((data: any) => (
        {
          data: data.name,
        }
      ));
  }
}

const API = new IAMAPI();

export default API;
