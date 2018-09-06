import React, {Component} from 'react';
import './Form.css'

class Form extends Component{
  state = {
  inputValue: '',
  }

  onInputChanged = (e) => {
    this.setState({inputValue:e.target.value})
  }

  render(){

    return(
      <div className="col-md-6 form-block">
        <h1 className="form-block-title">Weather forecast</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.getWeatherForecast(e.target.querySelector('input').value);
          e.target.reset();
          this.setState({inputValue:''})
        }}>
          <input type="text"
                 name="city"
                 className="form-block-input"
                 placeholder="Input your city..."
                 onChange={this.onInputChanged}
                 autoComplete="off"/>
          <button type="submit" className="btn btn-primary form-block-btn" disabled={!this.state.inputValue}>Find</button>
        </form>
      </div>
    )
  }

}

export default Form;