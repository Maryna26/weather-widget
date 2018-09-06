import Constants from '../constants/Constants'
import axios from 'axios';

export default {
  getWeatherForecast(city){
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Constants.API_WEATHER_KEY}&units=metric`)
  }
};
