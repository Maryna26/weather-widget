import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import History from './components/History';
import {connect}  from 'react-redux';
import './App.css';
import getWeatherForecast from './actions/WeatherForecast';


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <Weather city={this.props.cityName}
                   dataForecast={this.props.dataForecast}
                   stateForecast={this.props.stateForecast}
                   getWeatherForecast={this.props.getWeatherForecast}/>
          <Form getWeatherForecast={this.props.getWeatherForecast}/>
          <History historyData={this.props.history}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cityName: state.city,
  dataForecast: state.data,
  stateForecast: state.state,
  history: state.history
});
const mapDispatchToProps = dispatch => ({
  getWeatherForecast: (cityName) => dispatch(getWeatherForecast(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
