import axios from "axios";
const ServerURL = "http://devapi.hidoc.co:8080/hidoc-us/drug";

const getData = async (url) => {
  try {
    var response = await fetch(`${ServerURL}/${url}`);
    var result = await response.json();
    return result;
  } catch (e) {
    return null;
  }
};

const postData = async (url, body) => {
  try {
    var response = await axios.post(`${ServerURL}/${url}`, body);
    var result = await response.data;
    return result;
  } catch (e) {
    return null;
  }
};

export { ServerURL, getData, postData };
