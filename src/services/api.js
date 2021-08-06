import axios from "axios";

// Create axios instance for api calls

const weatherApi = axios.create({
  baseURL: "api.openweathermap.org/data/2.5/",
  timeout: 20000,
});

// Call the api as get request
export const getWeather = (city) => weatherApi.get(`weather?q=${city}&appid=${REACT_APP_API_KEY}`);

