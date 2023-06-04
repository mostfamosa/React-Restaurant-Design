import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='mail' placeholder='Enter Your Email Address'/>
        <button className='custom__button'>Subscripe</button>
      </div>
    </div>
  );
}

export default Newsletter;
