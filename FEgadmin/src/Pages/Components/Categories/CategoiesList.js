import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';
var instance = require('../../../config')

class CategoriesList extends Component {
  state = {
    categories: []
  }
  
  componentDidMount() {
    instance.get(`/categories` )
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
  }
  render() {
    const {categories} = this.state;
    let element= []
    if(categories!==undefined){
      element= categories.map(cat=>
        <tr key={cat.id}>
          <td>{cat.id}</td>
          <td>{cat.title}</td>
          <td>{cat.description}</td>
          <td>{cat.cream_level}</td>
          <td>
            <span className={cat.status == 1 ? 'badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill' : 'badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill'}> 
              {cat.status == 1 ? "Active" : 'Inactive' } 
            </span>
          </td>
          <td>{cat.created_by} </td>
          <td> <Moment format="DD MMM YYYY - HH:mm:ss A" withTitle>{cat.created_at}</Moment> </td>
          <td> <Moment format="DD MMM YYYY - HH:mm:ss A" withTitle>{cat.updated_at}</Moment> </td>
          <td>
            <Link to={`/category/${cat.id}`}  className="td-n c-deep-green-500 cH-blue-500 fsz-md p-5"> <i className="ti-eye"></i> </Link> | 
            <Link to={`/category/${cat.id}/edit`}  className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5" > <i className="ti-pencil"></i> </Link> | 
            <Link to={`#`} onClick={() => {if(window.confirm('Are you sure to delete this record?')){ this.deleteHandler(cat.id)};}}  className="td-n c-red-500 cH-blue-500 fsz-md p-5"> <i className="ti-trash"></i> </Link>
          </td>
        </tr>
      ) 
    }
    
    return (
      <main className="main-content bgc-grey-100">
        <div id="mainContent">
          <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">Categories Tables</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="c-grey-900 mT-10 mB-30">Categories Tables</h4>
                    </div>
                    <div className="col-md-6 pull-right">
                      <div className="pos-r">
                        <Link to="/category/new">
                          <button type="button" className="pos-a r-10 t-2 btn cur-p bdrs-50p p-0 w-3r h-3r btn-secondary">
                            <i className="ti-plus"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Cream Level</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th><i className="fa fa-fw fa-clock-o c-green-500"></i> Created At</th>
                        <th> <i className="fa fa-fw fa-clock-o c-red-500"></i> Updated At</th>
                        <th><i className="fa fa-fw fa-cog c-grey-500"></i> Actions</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Cream Level</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {element}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  constructor() {
		super();
		this.state = {
			// shown: true,
		};
  }
  deleteHandler(props){
    axios.delete(`http://localhost:3000/api/v1/users/delete?id=${props}`)
    .then(res => {
      console.log('Deleted Successfully.');
    })
  }

}

export default CategoriesList;
