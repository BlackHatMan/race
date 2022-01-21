import Controls from './Controls';
import Garage from './Garage';
import { createCar, removeCar, updateCar } from './api/api';

type SetUpdateId = (id: number) => void;
type InitialData = {
  name: string,
  color: string,
  id: number
};
class Main extends Controls {
  main: HTMLDivElement;

  countCar: HTMLHeadingElement;

  garages: Array<Garage>;

  id: number;

  updateID: number;

  removeGarage: (id: number) => void;

  setUpdateId: SetUpdateId;

  updateBtn: () => void;

  winner: HTMLDivElement;

  constructor() {
    super();
    this.main = document.createElement('div');
    this.main.className = 'main';
    this.countCar = document.createElement('h1');
    this.updateID = 0;
    this.main.appendChild(this.controls);
    this.main.appendChild(this.countCar);
    this.garages = [];
    this.winner = document.createElement('div');
    this.winner.classList.add('winner');

    this.main.appendChild(this.winner);
    this.removeGarage = (id: number) => {
      removeCar(id);
      this.garages.find((el) => el.id === id).removeItemGarage();
      this.garages = this.garages.filter((el) => el.id !== id);
      this.countCar.textContent = `GARAGE (${this.garages.length})`;
    };

    this.setUpdateId = (id) => {
      this.updateID = id;
    };

    this.updateBtn = () => {
      updateCar(this.updateID, this.colorPickerUpdate.value, this.modelUpdateName.value);
      this.garages.find((el) => el.id === this.updateID)
        .updateCar(this.colorPickerUpdate.value, this.modelUpdateName.value);
      this.modelUpdateName.value = '';
      this.modelUpdateName.disabled = true;
      this.btnUpdateTrack.disabled = true;
    };
  }

  startAll = () => {
    const arrayTime: Array<Promise<string>> = this.garages.map((el) => el.race.startRace());
    this.btnStartAll.disabled = true;
    this.btnResetAll.disabled = false;

    Promise.race(arrayTime).then((resolve) => {
      this.winner.textContent = resolve;
      setTimeout(() => {
        this.winner.innerText = '';
      }, 3500);
    });
  };

  reset = () => {
    this.garages.forEach((el) => el.race.stopRace());
    this.btnStartAll.disabled = false;
  };

  createGarage = () => {
    if (this.modelName.value) {
      createCar(this.modelName.value, this.colorPickerCreate.value);
      const instGarage = new Garage(
        this.btnUpdateTrack,
        this.modelUpdateName,
        this.removeGarage,
        this.setUpdateId,
        this.modelName.value,
        this.colorPickerCreate.value,
        this.garages.length + 1,
      );

      this.main.appendChild(instGarage.renderGarage());

      this.modelName.value = '';
      this.garages.push(instGarage);
      this.countCar.textContent = `GARAGE (${this.garages.length})`;
    }
  };

  render(initialData: Array<InitialData>) {
    initialData.forEach((el: InitialData) => {
      const instGarage = new Garage(
        this.btnUpdateTrack,
        this.modelUpdateName,
        this.removeGarage,
        this.setUpdateId,
        el.name,
        el.color,
        el.id,
      );
      this.garages.push(instGarage);
      this.main.appendChild(instGarage.renderGarage());

      this.countCar.textContent = `GARAGE (${this.garages.length})`;
    });

    return document.body.appendChild(this.main);
  }
}
export default Main;
