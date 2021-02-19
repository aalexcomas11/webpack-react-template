/**
 * Fake API that mimics api to login
 */

 type LoginPayload = {
    name: string,
    password: string,
 }
class IAMAPI {
  // eslint-disable-next-line class-methods-use-this
  get(payload: LoginPayload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // please don't send the username and password as a response in real life lol
        resolve({ data: 'token', payload });
      }, getRandomInt(5, 1) * 1000);
    });
  }
}

function getRandomInt(max:number, min:number) {
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

export default new IAMAPI();
