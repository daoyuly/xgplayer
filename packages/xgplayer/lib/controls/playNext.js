'use strict';

var _player = require('../player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playNext = function playNext() {
  var player = this;
  var root = player.root;
  var nextBtn = player.config.playNext;
  player.currentVideoIndex = -1;

  function onPlayNextBtnClick() {
    if (player.currentVideoIndex + 1 < nextBtn.urlList.length) {
      player.currentVideoIndex++;
      player.video.autoplay = true;
      player.src = nextBtn.urlList[player.currentVideoIndex];
      player.emit('playerNext', player.currentVideoIndex + 1);
    } else {
      player.emit('urlList last');
    }
  }
  player.on('playNextBtnClick', onPlayNextBtnClick);

  function onDestroy() {
    player.off('playNextBtnClick', onPlayNextBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('playNext', playNext);