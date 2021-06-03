import React, { Component } from 'react';
import axios  from 'axios';
import UserDetail from './userDetail';


class RemoteAPIData extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    getRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((received)=>{
           // console.log(received.data);
            this.setState({users: received.data})
            console.log(this.state.users);
            
        })
    }
    componentWillMount(){
        this.getRemoteData()
    }
    renderUserDetail(){
       return this.state.users.map((user) => {
        return (<UserDetail
                    key = {user.id}
                    uname = {user.name}
                    uemail = {user.email}
                    unameuser = {user.username}>
                </UserDetail>)
        })
    }
    render() { 
        return ( 
            <div>
                Getting data..<br></br>
               
                <ol>
                    {this.renderUserDetail()}
                    </ol> 
            </div>
         );
    }
}
 
export default RemoteAPIData;