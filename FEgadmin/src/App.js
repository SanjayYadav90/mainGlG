import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/scripts/index'

import Header from './Pages/Common/Header';
import Footer from './Pages/Common/Footer';
import SideNav from './Pages/Common/SideNav';
import Home from './Pages/Statics/Home';
import About from './Pages/Statics/About';
import Contact from './Pages/Statics/Contact';
import User from './Pages/Components/users/user';
import Show from './Pages/Components/users/show';
import Edit from './Pages/Components/users/Edit';
import New from './Pages/Components/users/new';
import CategoriesList from './Pages/Components/Categories/CategoiesList';
import CategoryNew from './Pages/Components/Categories/CategoryNew';
import CategoryEdit from './Pages/Components/Categories/CategoryEdit';
import CategoryShow from './Pages/Components/Categories/CategoryShow';
import Login from './Pages/Common/Login';

const Routing = props => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/user/new" component={New} />
      <Route path="/user/:id/edit" component={Edit} />
      <Route path="/user/:id" component={Show} />
      <Route path="/contact" component={Contact} />
      <Route path="/categories" component={CategoriesList} />
      <Route path="/category/new" component={CategoryNew} />
      <Route path="/category/:id/edit" component={CategoryEdit} />
      <Route path="/category/:id" component={CategoryShow} />
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <SideNav/>
        <div className="page-container">
          <Header />
          <Routing/>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
