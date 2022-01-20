import { carSvg } from '../assets/carSvg';

export class Car {
  car: HTMLDivElement;
  constructor(color: string) {
    this.car = document.createElement('div')
    this.car.classList.add('car')

    this.car.style.fill = color
    this.car.innerHTML = carSvg();
  }

  createCar() {
    return this.car
  }

  changeColor(color: string) {
    this.car.style.fill = color
  }
}