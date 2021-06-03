import React from 'react';

import ChildForm from './childForm';

class ParentForm extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                nameValue: ""
            }
             this.captureInput = this.captureInput.bind(this)
             this.sayHello = this.sayHello.bind(this)
    }
    captureInput(event){
        console.log(event.target.value);
        this.setState({
            nameValue: event.target.value
        })
    }
    sayHello(){
        alert(this.state.nameValue)
    }
    render() { 
        return ( 
            <div>
                Parent form 
                <input type="text" onChange={this.captureInput}></input> &nbsp;
                <button onClick={this.sayHello}>Hello</button>
                <hr></hr>
                Child Form
                <ChildForm callHello={this.captureInput}></ChildForm>
                
            </div>
            
         );
    }
}
 
export default ParentForm;