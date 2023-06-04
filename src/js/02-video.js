import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

const playerCurrentTime = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(playerCurrentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});


const onPlayGetCurrentTime = function(data) {
     player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    }).catch(function (error) {
    });
};

player.on('timeupdate', throttle(onPlayGetCurrentTime, 1000));