import React, { Component } from 'react';


class AgeStats extends Component {
timeSince(date){
    let today=new Date().getTime();
    let other_date=new Date(date).getTime();
    let difference=Math.abs(today - other_date)
    return ` ${(difference/1000)/60/60/24/365} milliseconds`
}

    render() {
      return (
        <div className="App">
         <h2>{this.props.data}</h2>
         Congrats on{this.timeSince(this.props.data)}
        </div>
      );
    }
  }
  
  export default AgeStats;
  