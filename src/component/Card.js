import React from 'react';
import '../css/Card.css';
import Oplus from '../images/O+.png';
import Bplus from '../images/B+.PNG';
import Aplus from '../images/A+.PNG';
import ABplus from '../images/AB+.PNG';
import Ominus from '../images/O-.PNG';
import Bminus from '../images/B-.PNG';
import Aminus from '../images/A-.PNG';
import ABminus from '../images/AB-.PNG';


class Card extends React.Component {
    state = { bloodgroup: '' };
    componentWillMount = () => {
        // const {bloodgroup, mobile, gender, email, fullname } = this.props;

    }
    component = {
        Oplus: Oplus,
        Bplus: Bplus,
        Aplus: Aplus,
        ABplus: ABplus,
        Ominus: Ominus,
        Bminus: Bminus,
        Aminus: Aminus,
        ABminus: ABminus
    }

    render() {
        const { bloodgroup, mobile, gender, email, fullname } = this.props;
        const MyComponent = this.component[bloodgroup === 'O+' && 'Oplus'] ||
            this.component[bloodgroup === 'B+' && 'Bplus'] ||
            this.component[bloodgroup === 'A+' && 'Aplus'] ||
            this.component[bloodgroup === 'AB+' && 'ABplus'] ||
            this.component[bloodgroup === 'O-' && 'Ominus'] ||
            this.component[bloodgroup === 'B-' && 'Bminus'] ||
            this.component[bloodgroup === 'A-' && 'Aminus'] ||
            this.component[bloodgroup === 'A-' && 'ABminus'];


        return (
            <div className="grid-item">
                {/* <hr /> */}
                <div className="avatar" >
                    <img className="img" src={MyComponent} alt="Avatar" />
                </div>
                <div className='fullname data'>
                    <strong>{fullname}</strong>
                </div>
                <div className='detail'>
                    <strong>
                        Blood Group :- {bloodgroup}<br />
                        Mobile Number : - {mobile}<br />
                        Gender :- {gender}<br />
                        Email:- {email}<br />
                    </strong>
                </div>
                {/* <hr /> */}
            </div >
        );
    }
}
export default Card;