import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds)
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time" || 0))
)
