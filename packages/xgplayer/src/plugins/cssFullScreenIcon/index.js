import Plugin from '../../plugin'
import CssFullscreenChange from '../assets/cssFullscreenChange.svg'

const {Events, POSITIONS, ROOT_TYPES} = Plugin
export default class CssFullScreenIcon extends Plugin {
  static get pluginName () {
    return 'cssFullscreenIcon'
  }

  static get defaultConfig () {
    return {
      position: POSITIONS.RIGHT,
      rootType: ROOT_TYPES.CONTROLS,
      index: 1,
      hide: true,
      disable: false
    }
  }

  constructor (args) {
    super(args)
    this.config.hide = !!this.playerConfig.cssFullscreen
  }

  afterCreate () {
    this.on(Events.CSS_FULLSCREEN_CHANGE, (isCssfullScreen) => {
      this.animate(isCssfullScreen)
    })
    // 退出全屏的时候会同时退出网页全屏
    this.on(Events.FULLSCREEN_CHANGE, (isFullScreen) => {
      !isFullScreen && this.animate(isFullScreen)
    })
  }

  onPluginsReady () {
    this.btnClick = this.btnClick.bind(this);
    this.bind(['click', 'touchend'], this.btnClick)
  }

  btnClick (e) {
    e.preventDefault()
    e.stopPropagation()
    if (!this.player.isCssfullScreen) {
      this.player.getCssFullscreen()
    } else {
      this.player.exitCssFullscreen()
    }
  }

  animate (isFullScreen) {
    if (!this.root) {
      return;
    }
    const path = this.find('.path')
    const full = this.find('.path_full').getAttribute('d')
    const exit = this.find('.path_exitfull').getAttribute('d')
    isFullScreen ? path.setAttribute('d', exit) : path.setAttribute('d', full)
  }

  switchTips () {
    this.find('.xg-tips').innerHTML = this.isCssfullScreen ? this.text.exitCssFullscreen : this.text.cssFullscreen
  }

  registerIcons () {
    return {
      cssFullscreen: CssFullscreenChange
    }
  }

  registerLangauageTexts () {
    return {
      'cssFullscreen': {
        jp: 'Cssfullscreen',
        en: 'Cssfullscreen',
        zh: '进入样式全屏'
      },
      exitCssFullscreen: {
        jp: 'Exit cssfullscreen',
        en: 'Exit cssfullscreen',
        zh: '退出样式全屏'
      }
    }
  }

  destroy () {
    this.unbind(['click', 'touchend'], this.btnClick)
  }

  render () {
    if (!this.playerConfig.cssFullscreen) {
      return
    }
    return `<xg-icon class='xgplayer-cssfullscreen'>
    <div class="xgplayer-icon">
    ${this.icons.cssFullscreen}
    </div>
    <div class="xg-tips">${this.isCssfullScreen ? this.text.exitCssFullscreen : this.text.cssFullscreen}</div>
    </xg-icon>`
  }
}