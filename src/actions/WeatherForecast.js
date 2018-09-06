import Constants from '../constants/Constants';
import WeatherApi from '../api/WeatherApi';

const getWeatherForecast = (city) => dispatch => {
  dispatch(_getWeatherForecastPending());
  WeatherApi
    .getWeatherForecast(city)
    .then(({ data }) => {
      dispatch(
        _getWeatherForecastSuccess(city,data)
      );
    })
    .then(()=>{
      let historyData = JSON.parse(localStorage.getItem('city')) || [];
      historyData.push(city);
      localStorage.setItem('city', JSON.stringify(historyData));
      dispatch(
        _getSearchingHistory(historyData)
      )
    })
    .catch(error =>
      dispatch(
        _getWeatherForecastFail()
      )
    );
};

const _getWeatherForecastSuccess = (cityName, forecastData) => ({
  cityName,
  forecastData,
  type: Constants.ActionTypes.GET_WEATHER_FORECAST_SUCCESS,
});

const _getWeatherForecastFail = () => ({
  type: Constants.ActionTypes.GET_WEATHER_FORECAST_FAILED,
});

const _getWeatherForecastPending = () => ({
  type: Constants.ActionTypes.GET_WEATHER_FORECAST_PENDING
});

const _getSearchingHistory = (historyData) => ({
  historyData,
  type: Constants.ActionTypes.GET_SEARCHING_HISTORY
})

export default getWeatherForecast;

