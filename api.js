const axios = require("axios");
const baseUrl = "https://how-to-barao.firebaseio.com/";
const auth = "?auth=AUTH_KEY";

const list = async key => {
  const content = await axios.get(`${baseUrl}${key}.json${auth}`);
  if (content.data) {
    const objects = Object.keys(content.data).map(key => {
      return {
        id: key,
        ...content.data[key]
      };
    });
    return objects;
  }
  return [];
};

const apagar = async (key, id) => {
  await axios.delete(`${baseUrl}${key}/${id}.json${auth}`);
  return true;
};

const get = async (key, id) => {
  const content = await axios.get(`${baseUrl}${key}/${id}.json${auth}`);
  return {
    id,
    ...content.data
  };
};

const update = async (key, id, body) => {
  await axios.put(`${baseUrl}${key}/${id}.json${auth}`, body);
  return true;
};

const post = async (key, body) => {
  await axios.post(`${baseUrl}${key}.json${auth}`, body);
  return true;
};

module.exports = {
  list,
  apagar,
  get,
  update,
  post
};
