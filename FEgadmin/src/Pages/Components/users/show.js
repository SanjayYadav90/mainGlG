import React, {Component} from 'react';
import axios from 'axios';

class Show extends Component {
  state = {
    user: []
  }
  componentDidMount(){
    axios.get(`http://localhost:3000/api/v1/users/show?id=${this.props.match.params.id}`).then(
      res => {
        const user = res.data;
        this.setState({ user });
      }
    );
  }
  render() {
    return(
      <div className="card" style={{marginTop: `4%`}} >
        <img src={`../../../team.jpg`} style={{width: '100%'}} alt="" />
        <h1> {this.state.user.name} </h1>
        <p className="title">Age: {this.state.user.age}</p>
        <p>{this.state.user.email}</p>
        <div style={{margin: '24px 0'}}>
          
        </div>
        <p><button>Contact : {this.state.user.mobile}</button></p>
      </div>


    );
  }
}
export default Show
