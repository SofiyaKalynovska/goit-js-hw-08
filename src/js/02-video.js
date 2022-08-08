import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onTimeUpdate({seconds}) {
  localStorage.setItem(STORAGE_KEY, seconds)
};

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0
);

player.on('timeupdate', throttle(onTimeUpdate, 1000));