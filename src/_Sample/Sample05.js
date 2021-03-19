import React, { Component } from 'react';
import LifeCycleSample from './Sample05_01';

//랜덤 색상 생성 
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state ={
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }

  
}
/*
  class사용하지 않을 때
  const App=({names})=>{
      return(
          <div>Hello {names}</div>
      )
  }
  */
export default App;