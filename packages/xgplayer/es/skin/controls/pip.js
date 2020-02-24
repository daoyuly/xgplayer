import Player from '../../player';

var s_pip = function s_pip() {
  var player = this;
  var util = Player.util;
  if (!player.config.pip) {
    return;
  }
  var pip = player.lang.PIP;
  var btn = util.createDom('xg-pip', '<p class="name"><span>' + pip + '</span></p>', { tabindex: 9 }, 'xgplayer-pip');

  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('pipBtnClick');
    });
  });
};

Player.install('s_pip', s_pip);