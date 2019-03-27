import React from 'react';
import './styles.scss'

const Deck = ({ deck, status = 'not-played' }) => {
  return (
    <div className='deck'>
      <div className='name'>
        {deck}
      </div>
      <div className={`status ${status}`}>
      </div>
    </div>
  );
}

export default Deck;