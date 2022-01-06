export class Controls {
  constructor() {
    this.controls = document.createElement('div')
    this.controls.classList.add('main-control')


    this.modelName = document.createElement('input')
    this.modelName.placeholder = "enter brand"
    this.modelUpdate = document.createElement('input')

    this.colorPicker = document.createElement('input')
    this.colorPicker.type = 'color'
    this.colorPickerUpdate = document.createElement('input')
    this.colorPickerUpdate.type = 'color'

    this.createCar = document.createElement('button')
    this.createCar.textContent = "CREATE"
    this.createCar.addEventListener('click', () => this.createTrack())
    this.updateCar = document.createElement('button')
    this.updateCar.addEventListener('click', () => this.getColor())
    this.updateCar.textContent = "UPDATE"

    this.controls.appendChild(this.modelName)
    this.controls.appendChild(this.colorPicker)
    this.controls.appendChild(this.createCar)

    this.controls.appendChild(this.modelUpdate)
    this.controls.appendChild(this.colorPickerUpdate)
    this.controls.appendChild(this.updateCar)
    this.testControl;
  }

  renderControls() {
    return this.controls
  }
  getColor() {
    const id = this.modelUpdate.dataset.id
    const car = document.getElementById(id)
    car.style.fill = this.colorPickerUpdate.value

  }
  getName() {
    return this.modelUpdate.value
  }
}