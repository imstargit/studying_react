import React, {Component} from 'react';
class EventPractice extends Component {
  state = {
    message : '',
    username : ''
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick=()=>{
    alert(this.state.username+" : "+this.state.message);
    this.setState({
      message:'',
      username:''
    })
  }
  handleKeyPress=(e)=>{
    if(e.key === "Enter"){
      this.handleClick();
    }
  }
  render(){
    return(
      <div>
        <h1>event test</h1>
        <input
          type="text"
          placeholder="input username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="input message"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={this.handleClick}
        >확인</button>
      </div>
    )
  }
}
export default EventPractice;
