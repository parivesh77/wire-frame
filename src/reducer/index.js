import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import Users from './UserReducer';
import Login from './Login';
import Navbar from './Navbar';
import {reducer as toastrReducer} from 'react-redux-toastr';
export default combineReducers(
    {
        Users:Users,
        form:formReducer,
        toastr: toastrReducer,
        login: Login,
        navbar: Navbar
    }
)