interface STATE_CLASS {
  DEFAULT: 'xgplayer',
  DEFAULT_SKIN: 'xgplayer-skin-default',
  ENTER: 'xgplayer-is-enter',
  PAUSED: 'xgplayer-pause',
  PLAYING: 'xgplayer-playing',
  ENDED: 'xgplayer-ended',
  CANPLAY: 'xgplayer-canplay',
  LOADING: 'xgplayer-isloading',
  ERROR: 'xgplayer-is-error',
  REPLAY: 'xgplayer-replay',
  NO_START: 'xgplayer-nostart',
  ACTIVE: 'xgplayer-inactive',
  FULLSCREEN: 'xgplayer-is-fullscreen',
  CSS_FULLSCREEN: 'xgplayer-is-cssfullscreen',
  ROTATE_FULLSCREEN: 'xgplayer-rotate-fullscreen',
  NO_CONTROLS: 'no-controls',
  FLEX_CONTROLS: 'flex-controls',
  CONTROLS_FOLLOW: 'controls-follow',
  AUTOHIDE: 'xgplayer_autohide',
  NOT_ALLOW_AUTOPLAY: 'not-allow-autoplay',
  SEEKING: 'seeking',
  PC: 'xgplayer-pc',
  MOBILE: 'xgplayer-mobile',
  MINI: 'xgplayer-mini' // 小窗播放状态 // 小窗播放状态
}

export default STATE_CLASS;