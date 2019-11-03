import { USER_URL } from './Address';

export const getUser = async ({ userId }) => {
  try {
    const res = await fetch(`${USER_URL}/${userId}`);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('something bad happend');
    }
  } catch (err) {
    return err;
  }
};
