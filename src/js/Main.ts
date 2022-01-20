import { Controls } from './Controls';
import { Garage } from './Garage';
import { createCar, removeCar, updateCar } from './api/api'
type setUpdateId = (id: number) => void
type initialData = {
  name: string,
  color: string,
  id: number
}
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
    this.updateID = 0
    this.main.appendChild(this.controls)
    this.main.appendChild(this.countCar)
    this.garages = []

    this.removeGarage = (id: number) => {
      removeCar(id)
      this.garages.find(el => el.id === id).removeItemGarage()
      this.garages = this.garages.filter(el => el.id !== id)
      this.countCar.textContent = this.garages.length.toString()
    }

    this.setUpdateId = (id) => {
      this.updateID = id
    }

    this.updateBtn = () => {
      updateCar(this.updateID, this.colorPickerUpdate.value, this.modelUpdateName.value)
      this.garages.find(el => el.id === this.updateID).updateCar(this.colorPickerUpdate.value, this.modelUpdateName.value)
      this.modelUpdateName.value = ''
      this.modelUpdateName.disabled = true
      this.btnUpdateTrack.disabled = true
    }
  }

  startAll = () => {
    const arrayTime = this.garages.map((el) => el.race.startRace())
    console.log("🚀 ~ file: Main.ts ~ line 53 ~ Main ~ arrayTime", arrayTime)
    this.btnStartAll.disabled = true
    this.btnResetAll.disabled = false

    Promise.race(arrayTime).then(resolve => console.log(resolve))
  }

  reset = () => {
    this.garages.forEach((el) => el.race.stopRace())
    this.btnStartAll.disabled = false
  }

  createGarage = () => {
    if (this.modelName.value) {

      createCar(this.modelName.value, this.colorPickerCreate.value)
      const instGarage = new Garage(this.btnUpdateTrack, this.modelUpdateName, this.removeGarage, this.setUpdateId, this.modelName.value,
        this.colorPickerCreate.value, this.garages.length + 1)

      this.main.appendChild(instGarage.renderGarage())

      this.modelName.value = ''
      this.garages.push(instGarage)
      this.countCar.textContent = this.garages.length.toString()
    }
    console.log(this.garages)
  }

  render(initialData: Array<initialData>) {

    initialData.forEach((el: initialData) => {
      const instGarage = new Garage(this.btnUpdateTrack, this.modelUpdateName, this.removeGarage, this.setUpdateId, el.name,
        el.color, el.id)
      this.garages.push(instGarage)
      this.main.appendChild(instGarage.renderGarage())

      this.countCar.textContent = this.garages.length.toString()
    })

    return document.body.appendChild(this.main)
  }
}