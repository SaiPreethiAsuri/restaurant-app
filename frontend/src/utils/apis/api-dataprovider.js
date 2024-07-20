import axios from 'axios';

const getData = async (path) => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const postData = async (path, data) => {
  try {
    const response = await axios.post(path, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const putData = async (path, data) => {
  try {
    const response = await axios.put(path, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const deleteData = async (path) => {
  try {
    const response = await axios.delete(path);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getData, postData, putData, deleteData };
