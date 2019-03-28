import React from 'react';
import './styles.scss'

const Tabs = ({ onClick, activeTab }) => {
  const groups = ['A', 'B', 'C', 'D']
  return (
    <div className='tabs'>
      {groups.map((item, index) => 
        <div className={`tab ${index === activeTab && 'active'}`} onClick={onClick}>
          Group {item}
        </div>
      )}
    </div>
  );
}

export default Tabs;