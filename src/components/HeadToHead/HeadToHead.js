import React from 'react';
import './styles.scss'

const HeadToHead = ({ rightWins = 0, leftWins = 0 }) => {
  const total = rightWins + leftWins
  const right = total ? `${rightWins / total * 100}%` : '50%'
  const left = total ? `${leftWins / total * 100}%` : '50%'
  return (
    <div className='bar'>
      <div
        className='left'
        style={{ width: left}}
      >
        {leftWins}
      </div>
      <div
        className='right'
        style={{ width: right}}
      >
        {rightWins}
      </div>
    </div>
  );
}

export default HeadToHead;