import React from 'react';
import './styles.scss'

const Deck = ({ deck, status = 'not-played' }) => {
  return (
    <div className='deck'>
      <div className='deck-name'>
        {deck}
      </div>
      <div className={`status ${status}`}>
        <i class={`far fa-${status !== 'not-played' ? status === 'lost' ? 'tired' : 'grin-beam' : 'meh'}`}></i>
      </div>
    </div>
  );
}

export default Deck;