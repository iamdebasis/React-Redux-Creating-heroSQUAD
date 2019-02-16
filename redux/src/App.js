import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AgeStats from './AgeStats'

class App extends Component {
  constructor(){
    super();
    this.state={
        newDate:'',
        birthday:'1992-12-16'
    }
    this.changeBirthday=this.changeBirthday.bind(this)
}
changeBirthday(){
  this.setState({birthday:this.state.newDate})
  console.log(this.state)
}

  render() {
    return (
      <div className="App">
       <div>
       <h1>Enter your Birthday....</h1>

          Birthday: <input type="date" name="bday" onChange={event=>this.setState({newDate:event.target.value})} /><br/><br/><br/>
          <input type="submit" onClick={this.changeBirthday}/>
          <AgeStats data={this.state.birthday}/>
    
       </div>
      </div>
    );
  }
}

export default App;
