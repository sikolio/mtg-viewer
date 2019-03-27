import React from 'react';
import './styles.scss'

const Twitch = ({ url = 'magic' }) => {
  return (
    <iframe
      src={`https://player.twitch.tv/?channel=${url}`}
      height="500"
      width="700"
      scrolling="no"
      allowfullscreen="yes">
    </iframe>
  );
}

export default Twitch;