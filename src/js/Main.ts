import { Controls } from './Controls';
import { Garage } from './Garage';

type setUpdateId = (id: number) => void

export class Main extends Controls {

  main: HTMLDivElement;
  countCar: HTMLHeadingElement;
  garages: Array<Garage>;
  id: number;
  updateID: number;
  removeGarage: (id: number) => void;
  setUpdateId: setUpdateId;
  updateBtn: () => void;

  constructor() {
    super()
    this.main = document.createElement('div')
    this.main.className = 'main'
    this.countCar = document.createElement('h1')
    this.id = 0
    this.updateID = 0
    this.main.appendChild(this.controls)
    this.main.appendChild(this.countCar)
    this.garages = []

    this.removeGarage = (id: number) => {
      this.garages.find(el => el.id === id).removeItemGarage()

      this.garages = this.garages.filter(el => el.id !== id)
      this.countCar.textContent = this.garages.length.toString()
    }

    this.setUpdateId = (id) => {
      this.updateID = id
    }

    this.updateBtn = () => {
      this.garages.find(el => el.id === this.updateID)
        .updateCar(this.colorPickerUpdate.value, this.modelUpdateName.value)
      this.modelUpdateName.value = ''
      this.modelUpdateName.disabled = true
      this.btnUpdateTrack.disabled = true
    }
  }
  startAll () {
    this.garages.forEach((el) => el.race.startRace())
    this.btnStartAll.disabled = true
    this.btnResetAll.disabled = false
  }
  reset () {
    this.garages.forEach((el) => el.race.stopRace())
    this.btnStartAll.disabled = false

  }

  createGarage() {
    const instGarage = new Garage(this.btnUpdateTrack, this.modelUpdateName, this.removeGarage, this.setUpdateId, this.modelName.value,
      this.colorPickerCreate.value, this.id)

    if (this.modelName.value) {
      this.main.appendChild(instGarage.renderGarage())
      this.modelName.value = ''
      this.id++

      this.garages.push(instGarage)
      this.countCar.textContent = this.garages.length.toString()
    }
  }

  render() {
    return document.body.appendChild(this.main)
  }
}