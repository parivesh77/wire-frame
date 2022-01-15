import React from 'react';
import '../css/Home.css';
import '../css/FAQs.css';
import Images from '../images/geo.jpg'
import {Link} from 'react-router-dom';


class Faq extends React.Component {

    render() {
        return (
            <div className='containerhome'>
                <div className='faqbody'>
                    <h1 className='heading'>CAN & CAN’T</h1>
                    <h2 className='maintitle'>CAN...</h2>
                    <div className='con'>
                    <div className='maincontent' >you are between age group of 18-60 years.</div>
                    <div className='maincontent'>Let others benefit from your good health. Do donate blood if ...</div>
                    <div className='maincontent' >your weight is 45 kgs or more.</div>
                    <div className='maincontent' >your haemoglobin is 12.5 gm% minimum.</div>
                    <div className='maincontent' >your last blood donation was 3 months earlier.</div>
                    <div className='maincontent' >you are healthy and have not suffered from malaria, typhoid or other transmissible disease in the recent past.</div>
                    </div>
                    <h2 className='titlecant' >CAN'T...</h2>
                    <div className='con2'>
                    <div className='maincontent2' >you are between age group of 18-60 years.</div>
                    <div className='maincontent2'>Let others benefit from your good health. Do donate blood if ...</div>
                    <div className='maincontent2' >your weight is 45 kgs or more.</div>
                    <div className='maincontent2' >your haemoglobin is 12.5 gm% minimum.</div>
                    <div className='maincontent2' >your last blood donation was 3 months earlier.</div>
                    <div className='maincontent2' >you are healthy and have not suffered from malaria, typhoid or other transmissible disease in the recent past.</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Faq;