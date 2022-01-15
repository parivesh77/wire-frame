import React from 'react';
// import Header from './header/Header';
import {connect} from 'react-redux';
import {fetchUsers} from '../action';
import Card from './Card';
import '../css/Card.css';

class AllDonor extends React.Component{
    
    componentWillMount = () => {
        this.props.fetchUsers((res=>{
            
        }));
    }

    renderUserCard=()=>{
        return <div className='grid-container'>
            {this.props.users.map((user)=>{
            return(
                <div>
                    <Card 
                    fullname={(`${user.first_name} ${user.last_name}`).toUpperCase()}
                    bloodgroup={user.bloodgroup}
                    mobile={user.mobile}
                    gender={user.gender}
                    email={user.email} 
                    />
                </div>
            );
        })}
        </div> 
    }
    
    render(){
        if(this.props.users){
            return(
                <div>
                    {/* <Header name='Back' /> */}
                    {this.renderUserCard()}
                </div>
                
            );
        }
        return <div></div>
        
    }
}

const mapStateToProps = (state) => {
    console.log(state.Users);
    return {users:state.Users}
}
export default connect(mapStateToProps,{fetchUsers})(AllDonor);