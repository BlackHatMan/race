import { Car } from "./Car"


export class Road {
  constructor() {
    this.road = document.createElement('div')
    this.road.classList.add('road')
    this.car = new Car()
  }

  createRoad(color, id) {
    this.road.appendChild(this.car.createCar(color, id))
    return this.road
  }
  start(distance) {
    this.road.appendChild(this.car.drive(distance))
    return this.road
  }

}