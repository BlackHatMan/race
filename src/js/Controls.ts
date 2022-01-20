export class Controls {
  controls: HTMLDivElement
  modelName: HTMLInputElement
  modelUpdateName: HTMLInputElement
  colorPickerCreate: HTMLInputElement
  colorPickerUpdate: HTMLInputElement
  btnCreateTrack: HTMLButtonElement
  btnUpdateTrack: HTMLButtonElement
  btnStartAll: HTMLButtonElement
  btnResetAll: HTMLButtonElement
  btnGenerateRnd: HTMLButtonElement
  reset: () => void
  startAll: () => void
  updateBtn: () => void
  createGarage: () => void
  constructor() {
    this.controls = document.createElement('div')
    this.controls.classList.add('main-control')

    this.modelName = document.createElement('input')
    this.modelName.placeholder = "enter brand"
    this.modelUpdateName = document.createElement('input')
    this.modelUpdateName.disabled = true

    this.colorPickerCreate = document.createElement('input')
    this.colorPickerCreate.type = 'color'
    this.colorPickerUpdate = document.createElement('input')
    this.colorPickerUpdate.type = 'color'

    this.btnCreateTrack = document.createElement('button')
    this.btnCreateTrack.textContent = "CREATE"
    this.btnCreateTrack.addEventListener('click', () => this.createGarage())
    this.btnUpdateTrack = document.createElement('button')
    this.btnUpdateTrack.addEventListener('click', () => this.updateBtn())
    this.btnUpdateTrack.textContent = "UPDATE"
    this.btnUpdateTrack.disabled = true

    this.btnStartAll = document.createElement('button')
    this.btnStartAll.textContent = 'RACE'
    this.btnStartAll.addEventListener('click', () => this.startAll())

    this.btnResetAll = document.createElement('button')
    this.btnResetAll.textContent = 'RESET'
    this.btnResetAll.addEventListener('click', () => this.reset())
    this.btnResetAll.disabled = true

    this.btnGenerateRnd = document.createElement('button')
    this.btnGenerateRnd.textContent = 'GENERATE CARS'

    this.controls.appendChild(this.modelName)
    this.controls.appendChild(this.colorPickerCreate)
    this.controls.appendChild(this.btnCreateTrack)
    this.controls.appendChild(this.modelUpdateName)
    this.controls.appendChild(this.colorPickerUpdate)
    this.controls.appendChild(this.btnUpdateTrack)


    this.controls.appendChild(this.btnStartAll)
    this.controls.appendChild(this.btnResetAll)
    this.controls.appendChild(this.btnGenerateRnd)

  }
}