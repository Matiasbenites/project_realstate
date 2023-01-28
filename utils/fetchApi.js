import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "c6be4098d7msh6ef4d9160c2f4eep178710jsn2ff64045a826",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
