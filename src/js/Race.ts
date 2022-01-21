import Car from './Car';

import { startEngine, startError, stopEngine } from './api/api';

class Race {
  race: HTMLDivElement;

  controls: HTMLDivElement;

  start: HTMLButtonElement;

  stop: HTMLButtonElement;

  distance: number;

  color: string;

  carContainer: HTMLDivElement;

  id: number;

  finish: HTMLDivElement;

  car: Car;

  anime: Animation;

  finishTime: string;

  constructor(color: string, id: number) {
    this.race = document.createElement('div');
    this.race.classList.add('track');
    this.controls = document.createElement('div');
    this.controls.classList.add('controls');
    this.id = id;
    this.start = document.createElement('button');
    this.stop = document.createElement('button');
    this.start.classList.add('btn', 'start');
    this.stop.classList.add('btn', 'stop');
    this.start.textContent = 'A';
    this.stop.textContent = 'B';
    this.stop.disabled = true;
    this.color = color;
    this.finishTime = '';
    this.controls.appendChild(this.start);
    this.controls.appendChild(this.stop);
    this.race.appendChild(this.controls);

    this.car = new Car(color);

    this.carContainer = document.createElement('div');
    this.carContainer.classList.add('car-container');
    this.finish = document.createElement('div');
    this.finish.className = 'finish';

    this.carContainer.appendChild(this.finish);
    this.carContainer.appendChild(this.car.createCar());
    this.race.appendChild(this.carContainer);
  }

  changeColor(color: string) {
    this.car.changeColor(color);
  }

  renderRace() {
    this.start.addEventListener('click', () => this.startRace());
    this.stop.addEventListener('click', () => this.stopRace());
    return this.race;
  }

  async stopRace() {
    await stopEngine(this.id);
    this.anime.cancel();
    this.start.disabled = false;
    this.stop.disabled = true;
  }

  async startRace() {
    const resp = await startEngine(this.id);
    const duration = Math.floor(resp.distance / resp.velocity);

    startError(this.id).then((res) => ((res.status !== 200) ? this.anime.pause() : null));
    this.stop.disabled = false;
    this.start.disabled = true;

    return new Promise((resolve: (res: string) => void) => {
      this.anime = this.car.car.animate([{ left: 0 }, { left: '90%' }], { duration, fill: 'forwards' });
      this.anime.onfinish = () => {
        this.finishTime = `Winner time ${this.anime.currentTime / 1000} seconds!!!!!`;
        resolve(this.finishTime);
      };
    });
  }
}
export default Race;
