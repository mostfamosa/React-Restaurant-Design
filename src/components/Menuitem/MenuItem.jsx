import React from 'react';

import './MenuItem.css';

function MenuItem(props) {

  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
          <p className='p__cormorant' style={{ color: '#DCCA87' }}>{props.title}</p>
        </div>
        <div className='app__menuitem-dash' />
        <div className='app__menuitem-price'>
          <p className='p__cormorant'>{props.price}</p>
        </div>

      </div>
      <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{ color: '#AAA' }}>{props.tags}</p>
      </div>

    </div>
  );
}

export default MenuItem;
