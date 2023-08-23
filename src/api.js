import axios from "axios";
const BASE_URL = "http://localhost:8000/api/v1/test/convert/";

export async function convertRoman(query) {
  const response = await axios.get(BASE_URL, {
    params: { query: query },
  });
  console.log(response);
  return response.data;
}
