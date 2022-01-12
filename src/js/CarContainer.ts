import { Car } from "./Car"


export class CarContainer extends Car {
  carContainer: HTMLDivElement
  finish: HTMLDivElement
  constructor() {
    super()
    this.carContainer = document.createElement('div')
    this.carContainer.classList.add('car-container')
    this.finish = document.createElement('div')
    this.finish.className = 'finish'
  }

  createCarContainer(color: string) {
    this.carContainer.appendChild(this.createCar(color))
    this.carContainer.appendChild(this.finish)
    return this.carContainer
  }

  start(distance: number) {
    this.carContainer.appendChild(this.drive(distance))

    let a = this.finish.getBoundingClientRect().right + 15
    let b = this.car.getBoundingClientRect().left
    if (a < b) {
      console.log(" ~ left hi hi ih ih hi")
    }

    return this.carContainer
  }

}