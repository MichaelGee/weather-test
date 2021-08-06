import axios from "axios";

// Create axios instance for api calls
const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 20000,
});

// Call the api as get request
export const getCurrentWeather = (city) => weatherApi.get(`weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);

//Couldnt get forecast becus apparently it isnt free
// export const getDailyForcast = (city) => weatherApi.get(`forecast/daily?q=${city}&cnt=7&appid=${process.env.REACT_APP_API_KEY_FORCAST}&units=metric`);

