import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class User extends Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/users/index`)
      .then(res => {
        const users = res.data.slice(0,19);
        this.setState({ users });
      })
  }
  render() {
    const {users} = this.state;
    let element= []
    if(users!==undefined){
      element= users.map(usr=>
        <tr key={usr.id}>
          <td>{usr.id}</td>
          <td>{usr.name}</td>
          <td>{usr.email}</td>
          <td>{usr.age}</td>
          <td>{usr.mobile}</td>
          <td>
            <Link to={`/user/${usr.id}`} > <i className="material-icons">Show</i> </Link> | 
            <Link to={`/user/${usr.id}/edit`} > <i className="material-icons">Edit</i> </Link> | 
            <Link to={`#`} onClick={() => {if(window.confirm('Are you sure to delete this record?')){ this.deleteHandler(usr.id)};}}> <i className="material-icons">Delete</i> </Link>
          </td>
        </tr>
      ) 
    }
    var shown = {
      display: this.state.shown ? "block" : "none"
    };
    return (
      <div className='User'>
      <div className="title-container">
        <h1 onClick={this.toggle.bind(this)}>Users List</h1>
      </div>
        <div className= "User-division">
        <div className="add-button">
        <Link to="/user/new" ><button className="button button4">Add User</button></Link>
      </div>
          <table style={ shown }>
            <tbody>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
                {element}
              <tr>
                
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
    );
  }

  constructor() {
		super();
		this.state = {
			shown: true,
		};
  }
  deleteHandler(props){
    axios.delete(`http://localhost:3000/api/v1/users/delete?id=${props}`)
    .then(res => {
      console.log('Deleted Successfully.');
    })
  }
	
	toggle() {
    console.log('I clicked!'+this.state.shown);
		this.setState({
			shown: !this.state.shown
		});
	}

}

export default User;
