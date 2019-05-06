import React, {Component} from 'react'

class CategoryNew extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var headers = {
            'Content-Type': 'application/json',
            'access_token': '6c8b7be26c03f570d00a8fab09da77f458e49064d8e775200a799408d56019a3161f50564364940df488eb03371ece4b34641a93adbe21cbc2ed18b09cd4e767' 
        }
        fetch('/category_create', {
            method: 'POST',
            body: data,
            headers: headers
        }).then(res => res.json())
        .then((result)=>{
            console.log(result);
            // this.props.history.push('/category/'+ result.user.id)
        });
    }
    render() {
        return (
            <main className="main-content bgc-grey-100">
                <div id="mainContent">
                    <div className="container-fluid">
                        {/* <form onSubmit={this.handleSubmit} >
                            <label htmlFor="user">User </label>
                                <input type="text" id="user_id" name="user_id" placeholder="Your name..." />
                            <label htmlFor="title">title</label>
                                <input type="text" id="title" name="title" placeholder="Your email..." />
                            <label htmlFor="description">Description</label>
                                <input type="text" id="description" name="description" placeholder="Your email..." />
                            <label htmlFor="cream_level">cream_level</label>
                            <select id="cream_level" name="cream_level">
                                <option selected>No item selected</option>
                                <option value="Full">Full</option>
                                <option value="Parchrised">Parchrised</option>
                            </select>
                            <select id="status" name="status">
                                <option selected>No item selected</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <input type="submit" defaultValue="Submit" />
                        </form> */}
                        <div className="row">
                            <div className="offset-md-2 masonry-item col-md-8">
                                <div className="bgc-white p-20 bd">
                                    <h4 className="c-grey-900 mB-20">Add Category</h4>
                                    <div className="mT-30">
                                        <form onSubmit={this.handleSubmit} >
                                            <div className="form-group row">
                                                <label htmlFor="user_id" className="col-sm-2 col-form-label">User</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" name="user_id" id="user_id" placeholder="User..." />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" name="title" id="title" placeholder="Title..." />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" name="description" id="description" placeholder="Description..." />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-4 mb-3 offset-md-2">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="cream_level">Cream Level</label>
                                                        <select id="inputState" name="cream_level" className="form-control">
                                                            <option defaultValue>No item selected</option>
                                                            <option value="Full"> Full </option>
                                                            <option value="Parchrised"> Parchrised </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3 offset-md-2">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="status">Status</label>
                                                        <select id="inputState" name="status" className="form-control">
                                                            <option defaultValue>No item selected</option>
                                                            <option value="Active">Active</option>
                                                            <option value="Inactive">Inactive</option>
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
                </div>
            </main>
        )
    }
}

export default CategoryNew
