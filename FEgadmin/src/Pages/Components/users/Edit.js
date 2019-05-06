import React, {Component} from 'react'
import axios from 'axios';

class Edit extends Component {
  state = {
    updatable : false,
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
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(`http://localhost:3000/api/v1/users/update?id=${this.props.match.params.id}`, {
      method: 'PUT',
      body: data,
    }).then(res => res.json())
    .then((result)=>{
      this.props.history.push('/user/'+ this.props.match.params.id)
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1 style={{textAlign: `center`}}>Edit User {this.props.match.params.id} </h1>
          <div className="container">
            <form onSubmit={this.handleSubmit} >
              <label htmlFor="name">User Name</label>
              <input type="text" required id="name" onChange={e => this.setState({ user: e.target.value })} name="user[name]" value={this.state.user.name} placeholder="Your name..." />
              <label htmlFor="email">Email</label>
              <input type="text" required id="email" onChange={e => this.setState({ user: e.target.value })} name="user[email]" value={this.state.user.email}  placeholder="Your email..." />
              <label htmlFor="age">Age</label>
              <select id="age" name="user[age]" onChange={e => this.setState({ user: e.target.value })}>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
              <label htmlFor="mobile">Mobile</label>
              <input type="text" id="mobile" onChange={e => this.setState({ user: e.target.value })} name="user[mobile]" value={this.state.user.mobile} placeholder="Your mobile no..." />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit
