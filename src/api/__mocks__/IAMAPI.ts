import { LoginPayload } from 'api/IAMAPI';

export const login = jest.fn((payload: LoginPayload) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!payload.name || !payload.password) {
      console.log('shooting error your way');
      reject(new Error('username and password are required'));
    }
    resolve({ data: 'token' });
  }, getRandomInt(5, 1) * 1000);
}));

export default {
  login,
};

/**
 * Get a random integer within specified range
 * @param max highest random value
 * @param min lowest random value
 */
function getRandomInt(max:number, min:number) {
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}
