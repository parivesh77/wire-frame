import React from 'react';
import EditForm from './EditForm';
import { updateUserInfo, fetchUser, fetchUsers } from '../action'
import { connect } from 'react-redux';
// import Header from './header/Header';
import _ from 'lodash'
import { toastr } from 'react-redux-toastr';
import history from '../History';
class EditProfile extends React.Component {
    state = { userdata: {}, username: [], emailid: [], mobile: [] }
    componentWillMount = () => {
        const id = localStorage.getItem('Id');
        this.props.fetchUser(id, (res) => {
            if (res.status === 200) {
                this.setState({ userdata: res.data });
            }
        })
        this.props.fetchUsers((res) => {
            if (res.status === 200) {
                res.data.map((user => {
                    const { username, emailid, mobile } = this.state;
                    username.push(user.username);
                    emailid.push(user.email);
                    mobile.push(user.mobile);
                    return 0;
                }))
            }

        });
    }

    onSubmit=(formvalues)=>{
            this.props.updateUserInfo(localStorage.getItem('Id'),formvalues,(res)=>{
                if(res.status===200){
                    toastr.info("Updated SuccessFully");
                    history.push('./Dashboard')
                }
                else{
                    toastr.error('Something went Wrong','Try again...');
                }
            });
        }
    initiateForm = () => {

        const { userdata, username, emailid, mobile } = this.state;
        console.log(userdata.first_name, 'initiate');
        const initialvalues = {
            "first_name": '' + userdata.first_name,
            "last_name": userdata.last_name,
            "gender": userdata.gender,
            "email": userdata.email,
            "bloodgroup": userdata.bloodgroup,
            "username": userdata.username,
            "state": userdata.state,
            "city": userdata.city,
            "mobile": userdata.mobile,
            "status": userdata.status,
        };
        return (
            <div>
                <EditForm initialValues={_.pick(initialvalues, "first_name",
                                                            'last_name', 
                                                            'gender', 
                                                            "email", 
                                                            "bloodgroup", 
                                                            "username",
                                                            "state",
                                                            "city",
                                                            "mobile",
                                                            "status"
                                                            )}
                    onSubmit={this.onSubmit}
                    userarray={username}
                    emailarray={emailid}
                    mobilearray={mobile}
                />
            </div>
        )
    }



    render() {
        console.log(this.state.userdata.first_name, 'render');
        if (this.state.userdata.first_name !== undefined) {
            return (
                <div>
                    {/* <Header name='Back' /> */}
                    <h3 style={{ textAlign: 'center' }}>Edit Profile</h3>
                    {this.initiateForm()}
                    {/* <PostForm
                    initialValues={_.pick(initialvalues, 'title', 'content', 'status')}
                    onSubmit={this.onSubmit}
                /> */}
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
}

export default connect(null, { updateUserInfo, fetchUser, fetchUsers })(EditProfile);