import React from "react";
import { Link } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { connect } from "react-redux";
import "./Header.css";
import { logout } from "../../action/Login";
import { changeActiveMenu } from "../../action/Navbar";
import { getRoutes } from "../../Utils/Helper";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogout = () => {
    this.props.logout({});
    toastr.info("Logout Successfully");
  };

  onMenuChange = (tabName) => {
    console.log('tabName: ', tabName);
    this.props.changeActiveMenu(tabName);
  };

  getActiveNavbar = (tabs) => {
    console.log('tabs: ', tabs);
    let elementArray = [];
    for (let [key, value] of Object.entries(tabs)) {
      console.log('key: ', key+value);
      elementArray.push(
        <Link onClick={() => this.onMenuChange(key)} to={getRoutes(key)}>
          <a
            href={getRoutes(key)}
            className={value == true ? "active" : "full"}
          >
            {key}
          </a>
        </Link>
      );
    }
    return elementArray;
  };

  render() {
    let { userdetails, activeTabs } = this.props;
    console.log('this.props: ', this.props);
    let navElements = this.getActiveNavbar(activeTabs);
    let isLoggedIn = userdetails.isLoggedIn || false;

    return isLoggedIn ? (
      <div className="header">
        <div className="navbar">
          {/* <Link onClick={() => this.onMenuChange("Dashboard")} to="/">
            <a href="/dashboard" className="active">
              Dashboard
            </a>
          </Link>
          <Link onClick={() => this.onMenuChange("All Indices")} to="/Login">
            <a href="/all-indices" className="full">
              All Indices
            </a>
          </Link>
          <Link onClick={() => this.onMenuChange("52-week Low")} to="/Signup">
            <a href="/52-week-low" className="full">
              52-week Low
            </a>
          </Link>
          <Link onClick={() => this.onMenuChange("52-week High")} to="/FAQs">
            <a href="/52-week-high" className="full">
              52-week High
            </a>
          </Link>
          <Link onClick={() => this.onMenuChange("Top Gainers")} to="/Contact">
            <a href="/top-gainers" className="full">
              Top Gainers
            </a>
          </Link>
          <Link onClick={() => this.onMenuChange("Top Loosers")} to="/Contact">
            <a href="/top-loosers" className="full">
              Top Loosers
            </a>
          </Link>
          <Link onClick={() => this.onMenuChange("Symbols")} to="/Contact">
            <a href="/symbols" className="full">
              Symbols
            </a>
          </Link> */}
          {navElements.map((element) => element)}
          <Link onClick={this.onLogout} to="/login" className="logout-right">
            <a href="/Contact" className="logout">
              Logout
            </a>
          </Link>
        </div>
      </div>
    ) : (
      <div className="blank"></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userdetails: state.login.userDetails,
    activeTabs: state.navbar.activeTabs,
  };
}

export default connect(mapStateToProps, { logout, changeActiveMenu })(Header);
// export default Header;
