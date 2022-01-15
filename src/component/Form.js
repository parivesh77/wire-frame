import React from 'react'
import { Field, reduxForm } from 'redux-form';
import '../css/Form.css';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css'

class Form extends React.Component {


    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='error message'>
                    <div className="errormessage">{error}</div>
                </div>
            );
        }
    }



    renderInput = ({ input, type, label, meta, maxLength }) => {
        return (

            <div className='field'>
                <label>{label}</label>
                <input {...input} type={type} maxLength={maxLength} />
                {this.renderError(meta)}
            </div>
        )
    }

    renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div >
            <label style={{ fontWeight: '600', fontSize: '13px' }} >{label}</label>
            <div>
                <textarea style={{ row: '3' }} {...input} placeholder={label} type={type} />
                {touched && (error && <span className='errormessage' >{error}</span>)}
            </div>
        </div>
    )
    states = ['Madhya Pradesh'];
    bloodgroup = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];
    cities = ['indore', 'ujjain', 'Bhopal'];
    status = ['Ready to donate', 'depend on time availability', 'Not now' ,'High Priority for donation'];
    gender = ['Male','Female','Other'];
    renderDropdownList = ({ input, data, valueField, textField, label, meta: { touched, error } }) => {
        return (
            <div>
                <label style={{ fontWeight: '600', fontSize: '13px' }}>{label}</label>
                <DropdownList {...input}
                    data={data}
                    valueField={valueField}
                    textField={textField}
                    onChange={input.onChange}
                    defaultValue={input.name}
                />
                {touched && (error && <span className='errormessage' >{error}</span>)}
            </div>
        );
    }


    onSubmit = (formValues) => {
        this.refs.btn.setAttribute("disabled", "disabled");
        this.props.onSubmit(formValues);
    }

    render() {
        return (

            <div className="formbg" >
                <form className="ui form error formmargin " onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h4>Personal Detail</h4>
                    <hr />
                    <Field name="first_name" type="text" component={this.renderInput} label="First Name" />
                    <Field name="last_name" type="text" component={this.renderInput} label="Last Name" />
                    <Field name="username" type="text" component={this.renderInput} label="UserName" />
                    <Field
                        name="gender"
                        component={this.renderDropdownList}
                        data={this.gender}
                        valueField="value"
                        textField="type"
                        label="Gender" />
                    <Field
                        name="bloodgroup"
                        component={this.renderDropdownList}
                        data={this.bloodgroup}
                        valueField="value"
                        textField="type"
                        label="Blood Group" />

                    <h4>Contact Information</h4>
                    <hr />
                    <Field name="email" type="text" component={this.renderInput} label="E-mail" />
                    <Field
                        name="state"
                        component={this.renderDropdownList}
                        data={this.states}
                        valueField="value"
                        textField="type"
                        label="States" />
                    <Field
                        name="city"
                        component={this.renderDropdownList}
                        data={this.cities}
                        valueField="value"
                        textField="type"
                        label="City" />
                    <Field name="mobile" component={this.renderInput} label="Mobile" />
                    <h4>Required</h4>
                    <hr />
                    <Field
                        name="status"
                        component={this.renderDropdownList}
                        data={this.status}
                        valueField="value"
                        textField="type"
                        label="Status" />
                    <Field name="password" type="password" component={this.renderInput} label="Password" />
                    <Field name="ConfirmPassword" type="password" component={this.renderInput} label="ConfirmPassword" />
                    <center><button ref='btn' className="ui button primary">Submit</button></center>
                </form>
            </div >
        );
    }
}

const validate = (formValues, props) => {
    const errors = {};
    console.log(props.emailarray, 'validation');
    if (!formValues.first_name) {
        errors.first_name = 'First name is required'
    } else if (formValues.first_name.length > 30) {
        errors.first_name = 'length must be less than 30'
    }

    if (!formValues.last_name) {
        errors.last_name = 'Last name is required'
    } else if (formValues.last_name.length > 30) {
        errors.last_name = 'length must be less than 30'
    }

    if (!formValues.bloodgroup) {
        errors.bloodgroup = 'Please select bloodGroup'
    }

    if (!formValues.gender) {
        errors.gender = 'Please select gender'
    }

    if (!formValues.city) {
        errors.city = 'Please select city'
    }

    if (!formValues.state) {
        errors.state = 'Please select state'
    }
    
    if (!formValues.status) {
        errors.status = 'Please select status'
    }

    if (!formValues.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(formValues.email)) {
        errors.email = 'Enter Valid Email'
    } else if (formValues.email.length > 50) {
        errors.email = 'length must be less than 50'
    }

    if (!formValues.username) {
        errors.username = 'Username is required'
    } else if (formValues.username.length < 6) {
        errors.username = 'Minimum length is 6 character'
    } else if (formValues.username.length > 8) {
        errors.username = 'Maximum length is 8 character'
    }

    if ((props.userarray.indexOf(formValues.username)) !== -1) {
        errors.username = 'Username already exist';
    }
    if ((props.emailarray.indexOf(formValues.email)) !== -1) {
        errors.email = 'Email already exist';
    }
    
    if (!formValues.mobile) {
        errors.mobile = 'Mobile number is required'
    }else if(isNaN(formValues.mobile)){
        errors.mobile = 'Phone number must be Numeric'; 
    }
    else if(formValues.mobile.length>10 || formValues.mobile.length<10){
        errors.mobile = 'Phone number must be 10 digits';   
    }
    if ((props.mobilearray.indexOf(formValues.mobile)) !== -1) {
        errors.mobile = 'Mobile number already exist';
    }

    if (!formValues.password) {
        errors.password = 'Password is required'
    } else if (formValues.password.length < 6) {
        errors.password = 'Minimum length is 6 character'
    } else if (formValues.password.length > 20) {
        errors.username = 'length must be less than 20'
    }

    if (!formValues.ConfirmPassword) {
        errors.ConfirmPassword = 'Must mandatory to Confirm Password';
    } else if (formValues.ConfirmPassword !== formValues.password) {
        errors.ConfirmPassword = 'Password mismatched';
    }

    return errors;
}

const wrapedform = reduxForm({
    form: 'Form',
    validate
})(Form);

export default wrapedform;
