/**
 * 音画同步调和器
 */
class AVReconciler {
  constructor (props) {
    this.aCtx = props.aCtx;
    this.vCtx = props.vCtx;
    this.video = props.video
    this.timeoutId = null
    this.start = null
  }

  doReconcile () {

    const vCurTime = (this.vCtx.currentTime || 0);
    let aCurTime;
    if (this.video.noAudio) {
      aCurTime = vCurTime;
    } else {
      aCurTime = (this.aCtx.currentTime * 1000 || 0);
    }

    const gap = vCurTime - aCurTime;
    if (this.timeoutId) {
      return;
    }
    if (gap > 200) { // audio delayed for more than 100ms
      this.video.start += gap
      this.vCtx.pause()
      this.timeoutId = setTimeout(() => {
        this.vCtx.play()
        this.timeoutId = null
      }, gap)
    } else if (gap < -120) {
      this.video.start += gap
    }
  }

  destroy () {
    this.start = null
    this.aCtx = null
    this.vCtx = null
    if(this.timeoutId){
      clearTimeout(this.timeoutId)
    }
  }
}

export default AVReconciler;