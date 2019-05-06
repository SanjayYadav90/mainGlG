import React, {Component} from 'react'

class New extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:3000/api/v1/users/create', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
        .then((result)=>{
            this.props.history.push('/user/'+ result.user.id)
        });
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign: `center`}}>Add User</h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit} >
                        <label htmlFor="name">User Name</label>
                        <input type="text" required id="name" name="user[name]" placeholder="Your name..." />
                        <label htmlFor="email">Email</label>
                        <input type="text" required id="email" name="user[email]" placeholder="Your email..." />
                        <label htmlFor="age">Age</label>
                        <select id="age" name="user[age]">
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" id="mobile" name="user[mobile]" placeholder="Your mobile no..." />
                        <input type="submit" defaultValue="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default New
