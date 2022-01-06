import { carSvg } from '../assets/carSvg';

export class Car {
  constructor() {
    this.car = document.createElement('div')
    this.car.classList.add('car')
    this.car.innerHTML = carSvg();

  }

  createCar(color, id) {
    this.car.style.fill = color
    this.car.id = id
    return this.car
  }

  drive(distance) {
    this.car.style.left = `${distance}px`
    return this.car
  }
}