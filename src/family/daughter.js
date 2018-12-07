import React from 'react';
class Daughter  extends React.Component {
   
    render() { 
        return (
                <div>
                    <i>I am a Daughter!!!.My name is {this.props.name}</i>
                </div>
               );
    }
}
 
export default Daughter;