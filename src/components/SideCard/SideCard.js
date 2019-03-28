import React from 'react';
import './styles.scss'
import { PlayerA } from '../../assets/playerDefaults';
import { triangleShape } from '../../assets/shapes';
import Deck from '../Deck/Deck';

const SideCard = ({ side = 'left', player = PlayerA }) => {
  return (
    <div className={`side-card ${side}`} >
      <div className='player'>
        <div className='background'>
          {triangleShape()}
        </div>
        <div className='image'> 
          <img src={player.image}/>
          <div className='name'>
            {player.name}
          </div>
        </div>
        <div className='decks'>
          <Deck deck={player.deck1} />
          <Deck deck={player.deck2} />
        </div>
      </div>
    </div>
  );
}

export default SideCard;