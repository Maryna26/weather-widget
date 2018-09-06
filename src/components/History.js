import React, {Component} from 'react';
import './History.css'

class History extends Component{

  getHistory = () => {
    let historyData = JSON.parse(localStorage.getItem('city'));
    let historyDataUpdated = historyData.slice(Math.max(historyData.length - 10, 0)).reverse();

    return (
      historyDataUpdated.map((item) => {
        return (
          <li key={ Math.random() }>{item}</li>
        )
    }))
  }

  render(){
    return(
      <div className="col-md-3 history-block">
        <h2 className="history-block-title">Searching history</h2>
        <ul className="history-block-list">
          {JSON.parse(localStorage.getItem('city')) ? this.getHistory() : null}
        </ul>
      </div>
    )
  }
}

export default History;
