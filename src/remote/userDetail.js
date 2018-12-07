import React from 'react';
class UserDetail extends React.Component {
    
    render() { 
        return ( 
            <div>
              <li>  {this.props.uname} is {this.props.unameuser} with {this.props.uemail}</li>
            </div>
         );
    }
}
 
export default UserDetail;