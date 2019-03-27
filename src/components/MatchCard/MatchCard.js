import React from 'react';
import './styles.scss'
import { PlayerA, PlayerB } from '../../assets/playerDefaults';
import HeadToHead from '../HeadToHead/HeadToHead';
import Deck from '../Deck/Deck';

const MatchCard = ({ playerA = PlayerA, playerB = PlayerB, winsPlayerA = 0, winsPlayerB = 0 }) => {
  return (
    <div className='match-card'>
      <div className='players'>
        <div className='playerA'>
          <div className='name'>
            {playerA.name}
          </div>
          <div className='image'>
            <img src={playerA.image}/>
          </div>
          <Deck deck={playerA.deck1} />
          <Deck deck={playerA.deck2} />
        </div>
        <div className='x'>
          <span>X</span>
        </div>
        <div className='playerB'>
          <div className='name'>
            {playerB.name}
          </div>
          <div className='image'>
            <img src={playerB.image}/>
          </div>
          <Deck deck={playerB.deck1} />
          <Deck deck={playerB.deck2} />
        </div>
      </div>
      <HeadToHead leftWins={winsPlayerA} rightWins={winsPlayerB} />
    </div>
  );
}

export default MatchCard;