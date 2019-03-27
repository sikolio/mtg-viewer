import React from 'react';
import { ROUND_WIDTH,ROUND_HEIGHT, DEFAULT_ITEM_HEIGHT, DEFAULT_ITEM_WIDTH, FILL_COLORS} from './Constants'

const BracketItem = (props) => {
  const {
    item,
    position,
    onMouseEnter,
    onMouseOut
  } = props;
  const { playerA, playerB } = item
  const generateArrow = ( {x,y} ) => {
    const p1 = `${x},${y - ROUND_HEIGHT}`
    const p2 = `${x + ROUND_WIDTH},${y - ROUND_HEIGHT}`
    const end = `${x + ROUND_WIDTH},${y - ROUND_HEIGHT}`
    return `M${x},${y} C${p1} ${p2} ${end} L${x + ROUND_WIDTH},${y}`
  }
  return (
    <g
      className='bracket-item' 
      transform={`translate(${position.x},${position.y})`}
      onMouseEnter={ () => onMouseEnter(item) }
      onMouseOut={ () => onMouseOut(item)}
    >
      <rect
        x="0"
        y="1"
        width={DEFAULT_ITEM_WIDTH}
        height={DEFAULT_ITEM_HEIGHT -1}
        rx="1"
        ry="1"
        fill={'#cccccc'}
        strokeWidth='1'
      />
      <rect
        x="1"
        y="1"
        width={DEFAULT_ITEM_WIDTH - 2}
        height={DEFAULT_ITEM_HEIGHT / 2}
        fill='white'
        strokeWidth='1'
      />
      <path d={generateArrow({x: DEFAULT_ITEM_WIDTH - ROUND_WIDTH, y: DEFAULT_ITEM_HEIGHT })} fill='rgb(51, 51, 51)'/>
      <path d={generateArrow({x: DEFAULT_ITEM_WIDTH - ROUND_WIDTH, y: DEFAULT_ITEM_HEIGHT - ROUND_HEIGHT  })} fill='rgb(51, 51, 51)'/>
      <image xlinkHref={playerA.country} x="2" y="2" height="15px" width="20px"/>
      <image xlinkHref={playerB.country} x="2" y="22" height="15px" width="20px"/>
      <text
        x="0"
        y="0"
        dx={25}
        dy={15}
        textAnchor='left'
      >{playerA.name}</text>
      <text
        x="0"
        y="0"
        dx={25}
        dy={35}
        textAnchor='left'
      >{playerB.name}</text>
    </g>
  );
};

export default BracketItem;