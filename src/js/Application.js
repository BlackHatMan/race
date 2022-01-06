import { Controls } from './Controls';
import { Race } from './Race';

export class Application extends Controls {
  constructor() {
    super()
    this.main = document.createElement('div')
    this.main.className = 'main'
    this.id = 0











    this.main.appendChild(this.controls)
  }
  createTrack() {
    const race = new Race(this.colorPicker.value, this.modelName.value, this.modelUpdate)
    if (this.modelName.value) {
      this.main.appendChild(race.renderRace(this.id))
      this.modelName.value = ''
      this.id++
    }
  }

  render() {
    return document.body.appendChild(this.main)
  }
}