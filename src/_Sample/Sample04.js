import React, {Component} from 'react';
class IterationSample extends Component {
    state={
        names:['snowman','ice','snow','wind'],
        name:''
    }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleClick=()=>{
        this.setState({
            names:this.state.names.concat(this.state.name),
            name:''
        })
    }
    handleRemove(index) {
        const {names} = this.state; //var names = this.state.names;
        this.setState({
            names: names.filter((item,i)=>i!==index)
        });
      }
    render(){
        const namelist = this.state.names.map((name, index)=>(
            <li key={index} onDoubleClick={() => this.handleRemove(index)} >{name}</li>
          ));
        return(
            <div>
                <input 
                    placeholder="enter your word"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >PUSH IT!
                </button>
                <ul>{namelist}</ul>
            </div>
        )
    }
}
export default IterationSample;