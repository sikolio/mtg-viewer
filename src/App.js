import React, { Component } from 'react';
import './App.scss';
import HeadToHead from './components/HeadToHead/HeadToHead';
import MatchCard from './components/MatchCard/MatchCard';
import SideCard from './components/SideCard/SideCard';
import Twitch from './components/Twitch/Twitch';
import { PlayerA, PlayerB } from './assets/playerDefaults';
import Bracket from './components/Bracket/Bracket';
import Tabs from './components/Tabs/Tabs';

class App extends Component {
  state = {
    activeMatch: { playerA: PlayerA, playerB: PlayerB},
    bracketHover: { playerA: PlayerA, playerB: PlayerB }
  }
  render() {
    const { activeMatch, bracketHover } = this.state
    return (
      <div className="App">
        <div className='live-match'>
          <SideCard side='left' player={activeMatch.playerA} />
          <Twitch url='magic' />
          <SideCard side='right' player={activeMatch.playerB} />
        </div>
        <HeadToHead rightWins={3} leftWins={6}></HeadToHead>
        <div className='bracket-viewer'>
          <Tabs />
          <div className="bracket-container">
            <Bracket onActiveChange={(bracketHover) => this.setState({ bracketHover })} />
            <MatchCard playerA={bracketHover.playerA} playerB={bracketHover.playerB} winsPlayerA={3} winsPlayerB={5}></MatchCard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
