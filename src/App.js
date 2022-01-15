import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/signup";
import history from "./History";
import Dashboard from "./component/Dashboard";
import EditProfile from "./component/EditProfile";
import Login from "./component/login";
import AllDonor from "./component/AllDonors";
import ActiveDonor from "./component/ActiveDonors";
import Header from "./component/header";
import Footer from "./component/Footer";
import Faqs from "./component/Faqs";
import Contact from "./component/ContactUs";
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route path="/dashboard" exact component={Home}></Route>
                <Route path="/Signup" exact component={Signup}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/52-week-low" exact component={AllDonor}></Route>
                <Route
                  path="/52-week-high"
                  exact
                  component={ActiveDonor}
                ></Route>
                <Route path="/top-gainers" exact component={Dashboard}></Route>
                <Route
                  path="/top-loosers"
                  exact
                  component={EditProfile}
                ></Route>
                <Route path="/symbols" exact component={Faqs}></Route>
                <Route path="/all-indices" exact component={Contact}></Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
