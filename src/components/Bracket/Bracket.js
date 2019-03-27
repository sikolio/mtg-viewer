import React, { Component } from 'react';
import './styles.scss'
import BracketItem from './BracketItem';
import { PlayerA, PlayerB, PlayerC, PlayerD } from '../../assets/playerDefaults';
import { DEFAULT_ITEM_HEIGHT, DEFAULT_ITEM_WIDTH } from './Constants';
import BracketLine from './Lines';

const testItem = {
  playerA: PlayerA,
  playerB: PlayerB,
}

const testItem2 = {
  playerA: PlayerC,
  playerB: PlayerD,
}

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const Players = [PlayerA, PlayerB, PlayerC, PlayerD]

const testBracket = [
  { 
    level: 1,
    items: Array(8).fill(0).map((_, idx) => {
      return {
        playerA: sample(Players),
        playerB: sample(Players),
      }
    })
  },
  { 
    level: 2,
    items: Array(4).fill(0).map((_, idx) => {
      return {
        playerA: sample(Players),
        playerB: sample(Players),
      }
    })
  },
  { 
    level: 3,
    items: Array(2).fill(0).map((_, idx) => {
      return {
        playerA: sample(Players),
        playerB: sample(Players),
      }
    })
  }
]

class Bracket extends Component {

  render() {
    const { width = 800, height = 380, bracket = testBracket, onActiveChange } = this.props
    console.log(testBracket)
    return (
      <svg width={width} height={height}>
        <g transform={`translate(10, 10)`}>
          { testBracket[0].items.map((item, idx) => {
            return (
              <BracketItem
                item={item}
                position={{ x: 2, y: (DEFAULT_ITEM_HEIGHT + 5) * idx }}
                onMouseEnter={(a) => onActiveChange(a)}
                onMouseOut={(a) => console.log('out', a)}
              />
            )
          })}
          { testBracket[1].items.map((item, idx) => {
            return (
              <BracketItem
                item={item}
                position={{ x: DEFAULT_ITEM_WIDTH + 50, y: 20 + (DEFAULT_ITEM_HEIGHT + 5) * idx * 2}}
                onMouseEnter={(a) => onActiveChange(a)}
                onMouseOut={(a) => console.log('out', a)}
              />
            )
          })}
          { testBracket[2].items.map((item, idx) => {
            return (
              <BracketItem
                item={item}
                position={{ x: (DEFAULT_ITEM_WIDTH + 50) * 2, y: 60 + (DEFAULT_ITEM_HEIGHT + 5) * idx * 4}}
                onMouseEnter={(a) => onActiveChange(a)}
                onMouseOut={(a) => console.log('out', a)}
              />
            )
          })}
          <BracketLine position={{ x: DEFAULT_ITEM_WIDTH, y: 0 }} />
          <BracketLine position={{ x: DEFAULT_ITEM_WIDTH, y: 90 }} />
          <BracketLine position={{ x: DEFAULT_ITEM_WIDTH, y: 180 }} />
          <BracketLine position={{ x: DEFAULT_ITEM_WIDTH, y: 270 }} />
          <BracketLine separation={1.6} position={{ x: DEFAULT_ITEM_WIDTH * 2 + 50, y: 20 }} />
          <BracketLine separation={1.6} position={{ x: DEFAULT_ITEM_WIDTH * 2 + 50, y: 200 }} />
        </g>
      </svg>
    )
  }

}
export default Bracket;