import React from 'react';
import './styles.scss'
import { PlayerA } from '../../assets/playerDefaults';
import Deck from '../Deck/Deck';

const SideCard = ({ side = 'left', player = PlayerA }) => {
  return (
    <div className={`side-card ${side}`} >
      <div className='player'>
        <div className='name'>
          {player.name}
        </div>
        <div className='image'> 
          <img src={player.image}/>
        </div>
        <Deck deck={player.deck1} />
        <Deck deck={player.deck2} />
      </div>
    </div>
  );
}

export default SideCard;