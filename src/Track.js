import { Road } from "./Road"

export class Track {
  constructor() {
    this.track = document.createElement('div')
    this.track.classList.add('track')
    this.controls = document.createElement('div')
    this.controls.classList.add('controls')


    this.start = document.createElement('button')
    this.stop = document.createElement('button')
    this.start.classList.add('btn', 'start')
    this.stop.classList.add('btn', 'stop')
    this.start.textContent = 'A'
    this.stop.textContent = 'B'

    this.controls.appendChild(this.start)
    this.controls.appendChild(this.stop)
    this.track.appendChild(this.controls)


    this.road = new Road();
    this.distance = 0
  }
  renderTrack(color) {
    this.track.appendChild(this.road.createRoad(color))
    this.start.addEventListener('click', () => this.driveTrack())
    return this.track;
  }

  driveTrack() {
    const delay = (n) => {
      return new Promise(res => {
        let tm = setTimeout(() => res(tm), n);
      })
    }
    const fd = async () => {
      for (let i = 0; i < 200; i++) {
        await delay(20)
        this.distance++
        this.road.start(this.distance)
      }
    }

    return fd()
  }
}
