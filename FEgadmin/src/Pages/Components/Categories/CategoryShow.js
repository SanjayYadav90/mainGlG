import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
var instance = require('../../../config')

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: []
    } 
  }
  componentDidMount(){
    instance.get(`/categories/${this.props.match.params.id}`)
    .then(
      res => {
        const category = res.data;
        this.setState({ category });
      }
    );
  }
  render() {
    return(
      <main className="main-content bgc-grey-100">
        <div id="mainContent">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-md-2 masonry-item col-md-8">
                <div className="bgc-white p-20 bd">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 style={{textAlign: `center`}} className="c-grey-900 mB-20">Category Details</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <h2> Title:  {this.state.category.title} </h2>
                      <p className="title">Description: {this.state.category.description  }</p>
                      <p>Cream Level {this.state.category.cream_level}</p>
                      <p>Status: {this.state.category.status}</p>
                      <p>Created At: <Moment format="DD MMM YYYY - HH:mm:ss A" withTitle>{this.state.category.created_at}</Moment></p>
                      <p>Updated At: <Moment format="DD MMM YYYY - HH:mm:ss A" withTitle>{this.state.category.updated_at}</Moment> </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="offset-md-4 col-sm-4">
                      <Link to="/categories">
                        <button style={{width: '100%'}} type="submit" className="btn btn-primary">Categories List</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Show
