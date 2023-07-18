class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback(), 100
      }
      this.currentTime++
    }, 10)
  }

  getMinutes() {
    return Math.floor((this.currentTime / 60) / 100)
  }

  getSeconds() {
    return Math.floor((this.currentTime /100) % 60)
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100) 
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice (-2)
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${seconds}.${centiseconds}`
  }
}
