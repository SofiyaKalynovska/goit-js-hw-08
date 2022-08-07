import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onTimeUpdate({seconds}) {
  localStorage.setItem("videoplayer-current-time", seconds)
};

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0
);

player.on('timeupdate', throttle(onTimeUpdate, 1000));