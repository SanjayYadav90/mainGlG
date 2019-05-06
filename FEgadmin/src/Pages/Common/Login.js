import React, { Component } from 'react'

class Login extends Component {

  render() {
    return (
        <main className="main-content bgc-grey-100">
            <div id="mainContent">
            <div className="container-fluid">
                <div className="row gap-20 masonry pos-r">
                    <div className="offset-md-2 masonry-item col-md-8">
                        <div className="bgc-white p-20 bd">
                            <h4 className="c-grey-900 mB-20">Admin Login</h4>
                            <div className="mT-30">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                        </div>
                                    </div>
                                        <div className="form-group row">
                                        <div className="col-sm-2">Checkbox</div>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" /> Remember me
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="offset-md-4 col-sm-4">
                                                <button style={{width: '100%'}} type="submit" className="btn btn-primary">Sign in</button>
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

export default Login
