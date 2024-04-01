import axios from "axios";
const key = "ec7b2b7a7d48f2c3dba577c98929e34d";
const baseURL = "https://api.openweathermap.org/data/2.5/";

function formatDate(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${formattedHours}:${formattedMinutes}${period} ${day}/${month}/${year}`;
}

export const requestCity = (city) => {
  const query = `weather?q=${city}&appid=${key}`;
  const data = axios.get(baseURL + query).then((res) => {
    res.data.ts = formatDate(new Date());
    return res;
  });
  return data;
};

export const requestCurrent = (lat, lon) => {
  const query = `forecast?lat=${lat}&lon=${lon}&appid=${key}`;
  const data = axios.get(baseURL + query).then((res) => {
    return res;
  });
  return data;
};

("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=455c96d40c024d3b4b86c3653f12d6b9");
