import React from 'react';
import '../css/Home.css';
import '../css/FAQs.css';
import Images from '../images/geo.jpg'
import {Link} from 'react-router-dom';
import '../css/Contact.css';


class Contact extends React.Component {

    render() {
        return (
            <div className='containerhome'>
                <div className='faqbody'>
                    <h1 className='heading'>Contact Us</h1>
                    <h3 className='mainline'>Would you like to hear more information or required any clarifications? Please contact our nearest team member. If any of our team members not responding properly or misusing the Website, Please inform... </h3>
                    <hr />
                    <h2 className='state'>Madhya Pradesh</h2>
                    <h3 className='name' >Parivesh dharmadhikari (owner)</h3>
                    <h3 className='contactnumber'>8085456160</h3>
                    <h3 className='email'>pariveshdharmadhikaari7@gmail.com</h3>
                </div>
            </div>
        );
    }
}

export default Contact;