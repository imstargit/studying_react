import React, {Component} from 'react';
import ScrollBox from './Sample03_01';

class App extends Component{
    render(){
        return(
            <div>
                <ScrollBox ref={(ref)=>{this.Scrollbox=ref}}/>
                <button
                    onClick={()=>this.Scrollbox.scrollToBottom()}
                >맨 밑으로
                </button>
            </div>
        )
    }
}

export default App;