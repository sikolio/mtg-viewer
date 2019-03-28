import React from 'react';
import './styles.scss'

const Tabs = ({onClick}) => {
  const groups = ['A', 'B', 'C', 'D']
  return (
    <div className='tabs'>
      {groups.map(item => 
        <div className='tab' onClick={onClick}>
          Group {item}
        </div>
      )}
    </div>
  );
}

export default Tabs;