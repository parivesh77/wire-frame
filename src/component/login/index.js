import React from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../action/Login";

import history from "../../History";
import { toastr } from "react-redux-toastr";
// import Header from '../header/Header';
import "../../css/Form.css";
import "../../css/Home.css";
import "./Login.css";
import Images from "../../images/geo.jpg";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = { flag: false, userfound: "" };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error message">
          <div className="errormessage">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta, maxLength }) => {
    return (
      <div className="field">
        <div>
          <label>{label}</label>
          <input {...input} type={type} maxLength={maxLength} />
        </div>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.login(formValues);
    toastr.info("Login Successfully");
    this.props.history.push('/dashboard')
  };

  render() {
    return (
      <div className="formbody">
        <div className="login-form">
          <div className="formbg">
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <div className="formmargin">
              <form
                className="ui form error formmargin "
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <Field
                  name="username"
                  component={this.renderInput}
                  label="Username"
                  maxLength="20"
                />
                <Field
                  name="password"
                  type="password"
                  component={this.renderInput}
                  label="Password"
                  maxLength="20"
                />
                <center>
                  <button
                    ref="btn"
                    className="ui button primary "
                    style={{ alignContent: "right" }}
                  >
                    Login
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "you must Enter UserName";
  }
  if (!formValues.password) {
    errors.password = "you must Enter Password";
  }
  return errors;
};

const wrapedform = reduxForm({
  form: "LoginForm",
  validate,
})(Login);

export default withRouter(connect(null, { login })(wrapedform));
