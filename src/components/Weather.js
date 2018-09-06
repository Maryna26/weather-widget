import React, {Component} from 'react';
import Constants from '../constants/Constants';
import './Weather.css'

class Weather extends Component{

  componentDidMount(){
    const city = this.props.city;
    this.props.getWeatherForecast(city)
  }

  render(){
    const weatherContent = () => {
      if(this.props.stateForecast === Constants.States.SUCCESS){
        return (
          <div className="forecast_Block">
            <div className="row forecast-header">
              <div className="col-xs-6 col-sm-6 col-12 forecast-header-content">
                <div>{this.props.dataForecast.name}, {this.props.dataForecast.sys.country}</div>
                <div className="forecast-header-content-description">{this.props.dataForecast.weather[0].description}</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-12 forecast-header-img"><img className="forecast-img"  alt = "weatherImg" src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.dataForecast.weather[0].icon}.png`}/></div>
            </div>
            <div className="row forecast-content-block">
              <div className="col-xs-6 col-sm-6 col-12 forecast-content-header">{Math.round(this.props.dataForecast.main.temp)}<span>°C</span></div>
              <div className="col-xs-6 col-sm-6 col-12">
                <h3 className="forecast-content-details">Details</h3>
                <ul className="forecast-content-list">
                  <li>Wind <span>{this.props.dataForecast.wind.speed}</span><span>m/s</span></li>
                  <li>Humidity <span>{this.props.dataForecast.main.humidity}</span><span>%</span></li>
                  <li>Preasure <span>{this.props.dataForecast.main.pressure}</span><span>hPa</span></li>
                </ul>
              </div>
            </div>
          </div>
        )
      } else if(this.props.stateForecast === Constants.States.PENDING) {
        return <div>Loading ...</div>
      } else {
        return <div className="forecast-content-error">Something went wrong. Please try again</div>
      }
    }

    return(
      <div className="col-md-3">
        {weatherContent()}
      </div>
    )
  }

}

export default Weather;
