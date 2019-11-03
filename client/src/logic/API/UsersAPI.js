import { USERS_URL } from './Address';

export const getUsers = async () => {
  try {
    const res = await fetch(`${USERS_URL}`);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('something bad happend');
    }
  } catch (err) {
    return err;
  }
};
