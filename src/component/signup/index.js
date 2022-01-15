import React from "react";
import { createUser, fetchUsers } from "../../action";
import { connect } from "react-redux";
import Form from "../Form";
// import Header from "../header/Header";
import "../../css/Form.css";
import history from "../../History";
import "../../css/Form.css";
import "../../css/Home.css";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  state = { flag: true, username: [], emailid: [], mobile: [] };
  componentWillMount() {
    this.props.fetchUsers((res) => {
      if (res.status === 200) {
        res.data.map((user) => {
          const { username, emailid, mobile } = this.state;
          username.push(user.username);
          emailid.push(user.email);
          mobile.push(user.mobile);
          return 0;
        });
      }
    });
  }

  onSubmit = (formValues) => {
    formValues.role = "author";
    this.props.createUser(formValues);
    history.push("./login");
  };

  render() {
    const { username, emailid, mobile } = this.state;
    return (
      <div className="formbody">
        <Form
          onSubmit={this.onSubmit}
          userarray={username}
          emailarray={emailid}
          mobilearray={mobile}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alldata: state.users,
  };
};

export default connect(mapStateToProps, { createUser, fetchUsers })(SignupForm);
