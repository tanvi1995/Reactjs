import React, { Component } from 'react';


class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counterValue : 0
        }
        this.counterUtil = this.counterUtil.bind(this)
    }
    

    counterUtil(){
        console.log("button clicked");
        this.setState({counterValue: this.state.counterValue + 1})
    }
    render() { 
        return ( 
            <div>
                <h2>Counter</h2>
                <button onClick={this.counterUtil}>Click Me</button>
                <br></br>
                I clicked the button {this.state.counterValue} times !!!!
            </div>
         );
    }
}
 
export default Counter;