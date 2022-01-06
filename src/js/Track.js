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
  renderTrack(color, id) {
    this.track.appendChild(this.road.createRoad(color, id))
    this.start.addEventListener('click', () => this.driveTrack())
    return this.track;
  }

  driveTrack() {
    this.start.disabled = true;
    const delay = (time) => {
      return new Promise(res => {
        let tm = setTimeout(() => res(tm), time);
      })
    }
    const fd = async () => {
      for (let i = 0; i < 250; i++) {
        await delay(5)
        this.distance++
        this.road.start(this.distance)
      }
      this.start.disabled = false
    }

    return fd()
  }
}
