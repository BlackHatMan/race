import { carSvg } from '../assets/carSvg';

export class Car {
  car: HTMLDivElement;
  constructor() {
    this.car = document.createElement('div')
    this.car.classList.add('car')
    this.car.innerHTML = carSvg();
  }

  createCar(color: string) {
    this.car.style.fill = color
    return this.car
  }

  drive(distance: number) {
    this.car.style.left = `${distance}px`
    return this.car
  }
}