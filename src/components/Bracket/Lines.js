import React from 'react';
import { ROUND_WIDTH,ROUND_HEIGHT, DEFAULT_ITEM_HEIGHT, DEFAULT_ITEM_WIDTH, FILL_COLORS} from './Constants'

const BracketLine = (props) => {
  const {
    position,
    separation = 1
  } = props;
  const { x, y } = position
  return (
    <g
      className='bracket-item' 
      transform={`translate(${position.x},${position.y})`}
    >
      <path
        d={`M5,21 L25,21 L25,${(DEFAULT_ITEM_HEIGHT * 2 * separation) - 15} L5, ${(DEFAULT_ITEM_HEIGHT * 2 * separation) - 15}`}
        fill='none'
        stroke='#cccccc'
        strokeWidth={2}
      />
      <path
        d={`M25,${DEFAULT_ITEM_HEIGHT * separation} L45,${DEFAULT_ITEM_HEIGHT * separation}`}
        fill='none'
        stroke='#cccccc'
        strokeWidth={2}
      />
    </g>
  );
};

export default BracketLine;