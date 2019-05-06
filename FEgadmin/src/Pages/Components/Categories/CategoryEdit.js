import React, {Component} from 'react';
var instance = require('../../../config')

class CategoryEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      cream_level: '',
      status: ''
    } 
  }

  titleChanged = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  descriptionChanged = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  cream_levelChanged = (e) => {
    this.setState({
      cream_level: e.target.value
    })
  }

  statusChanged = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  componentDidMount = () => {
    instance.get(`/categories/${this.props.match.params.id}`).then(
      res => {
        const category = res.data;
        this.setState({ 
          title: category.title,
          description: category.description,
          cream_level: category.cream_level,
          status: category.status
         });
      }
    );
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    instance.put(`/categories/${this.props.match.params.id}`, {
      category: {
        title: this.state.title,
        description: this.state.description,
        cream_level: this.state.cream_level,
        status: this.state.status
      }
    }).then((res) => {
      console.log(res)
      this.props.history.push('/category/'+ this.props.match.params.id)
    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <main className="main-content bgc-grey-100">
        <div id="mainContent">
          <div className="container-fluid"></div>
            <div className="row">
              <div className="offset-md-2 masonry-item col-md-8">
                  <div className="bgc-white p-20 bd">
                      <h4 className="c-grey-900 mB-20">Edit User {this.props.match.params.id}</h4>
                      <div className="mT-30">
                          <form  onSubmit={this.handleSubmit} >
                              <div className="form-group row">
                                  <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                  <div className="col-sm-10">
                                    <input type="text" className="form-control" onChange={this.titleChanged} name="category[title]" value={this.state.title} placeholder="Title..." />
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                  <div className="col-sm-10">
                                      <input type="textarea" className="form-control" onChange={this.descriptionChanged} name="category[description]" value={this.state.description} placeholder="Description..." />
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <div className="col-md-4 mb-3 offset-md-2">
                                      <div className="form-group col-md-12">
                                          <label htmlFor="cream_level">Cream Level</label>
                                          <select id="inputState" name="category[cream_level]" onChange={this.cream_levelChanged} className="form-control">
                                              <option defaultValue>No item selected</option>
                                              <option value="3.25% Butter fat">3.25% Butter fat </option>
                                          <option value="2% Reduced fat">2% Reduced fat</option>
                                          <option value="1% Low fat">1% Low fat</option>
                                          <option value="0-0.5% Nonfat">0-0.5% Nonfat</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div className="col-md-4 mb-3 offset-md-2">
                                      <div className="form-group col-md-12">
                                          <label htmlFor="status">Status</label>
                                          <select id="inputState"  name="category[cream_level]" onChange={this.statusChanged} className="form-control">
                                              <option defaultValue>No item selected</option>
                                              <option defaultValue={this.state.status} value="true">Active</option>
                                              <option value="false">Inactive</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <div className="offset-md-4 col-sm-4">
                                      <button style={{width: '100%'}} type="submit" className="btn btn-primary">Submit</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </main>
    )
  }
}

export default CategoryEdit
