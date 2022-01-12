import { CarContainer } from "./CarContainer"

export class Race {
  race: HTMLDivElement
  controls: HTMLDivElement
  start: HTMLButtonElement
  stop: HTMLButtonElement
  distance: number
  color: string
  carContainer: CarContainer
  check: boolean

  constructor(color: string) {

    this.race = document.createElement('div')
    this.race.classList.add('track')
    this.controls = document.createElement('div')
    this.controls.classList.add('controls')

    this.start = document.createElement('button')
    this.stop = document.createElement('button')
    this.start.classList.add('btn', 'start')
    this.stop.classList.add('btn', 'stop')
    this.start.textContent = 'A'
    this.stop.textContent = 'B'
    this.stop.disabled = true
    this.distance = 0
    this.color = color
    this.check = false
    this.controls.appendChild(this.start)
    this.controls.appendChild(this.stop)
    this.race.appendChild(this.controls)
    this.carContainer = new CarContainer()
  }

  changeColor(color: string) {
    this.carContainer.car.style.fill = color
  }

  renderRace() {
    this.race.appendChild(this.carContainer.createCarContainer(this.color))
    this.start.addEventListener('click', () => this.startRace())
    this.stop.addEventListener('click', () => this.stopRace())
    return this.race;
  }

  stopRace() {
    this.distance = 0
    this.carContainer.car.style.left = '0px'
    this.start.disabled = false;
    this.stop.disabled = true
    this.check = true
  }

  startRace() {
    this.check = false
    this.stop.disabled = false
    this.start.disabled = true;
    const delay = (time: number) => {
      return new Promise(res => {
        let tm: any = setTimeout(() => res(tm), time);   // TODO any type
      })
    }

    const fd = async () => {
      for (let i = 0; i < 300; i++) {
        if(this.check) break
        await delay(0)
        this.distance += 3
        this.carContainer.start(this.distance)
      }
    }
    return fd()

  }
}
