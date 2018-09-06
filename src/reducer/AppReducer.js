import Constants from '../constants/Constants';

const defaultState = { state: Constants.States.PENDING, data: {}, city: Constants.DEFAULT_CITY, history:[]};
const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Constants.ActionTypes.GET_WEATHER_FORECAST_PENDING:
      return {
        ...state,
        state: Constants.States.PENDING
      };
    case Constants.ActionTypes.GET_WEATHER_FORECAST_SUCCESS:
      return {
        state: Constants.States.SUCCESS,
        city:{
          ...action.cityName
        },
        data: {
          ...action.forecastData
        }
      };
    case Constants.ActionTypes.GET_WEATHER_FORECAST_FAILED:
      return {
        ...state,
        state: Constants.States.FAIL
      };
    case Constants.ActionTypes.GET_SEARCHING_HISTORY:
      return{
        ...state,
        history: action.historyData
      }
    default:
      return state;
  }
};

export default AppReducer;
