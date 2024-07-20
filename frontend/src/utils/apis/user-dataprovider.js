import {getData} from './api-dataprovider';

const getUsersList = async () => {
  try {
    return await getData(`/users`);
  } catch (error) {
    console.error(error);
  }
}

export { getUsersList };
