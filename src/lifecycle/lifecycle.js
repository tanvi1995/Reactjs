import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            dummyVariable : 0
        }
        this.changeState = this.changeState.bind(this)
    }
    componentWillMount(){
        console.log("Component will mount")
        console.log(this.state.dummyVariable );
        
        this.setState({
            dummyVariable:this.state.dummyVariable + 1
        })
    }
    componentDidMount(){
        console.log("Component mounted")
    }
    componentWillUpdate(){
        console.log("Component will update for any state change");
        
    }
    componentDidUpdate(){
        console.log("Component updated for any state change");
    }
    componentWillUnmount(){
        console.log("Component will unmount from view");
        
    }
    changeState(){
        this.setState({
            dummyVariable : this.state.dummyVariable + 1
        })
        if(this.state.dummyVariable > 5){
            ReactDOM.unmountComponentAtNode(document.getElementById("life"))
        }
    }
    render() { 
        return (
            <div>
                Exploring Component LifeCycle!!!!!!!
                <br></br>
                <button onClick={this.changeState}>Change State {this.state.dummyVariable}</button>
            </div>
          );
    }
}
 
export default LifeCycle;