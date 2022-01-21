import Race from './Race';

class Garage {
  garage: HTMLDivElement;

  remove: HTMLButtonElement;

  select: HTMLButtonElement;

  title: HTMLSpanElement;

  id: number;

  modelUpdate: HTMLInputElement;

  removeItemGarage: () => void;

  updateCar: (upColor: string, upName: string) => void;

  race: Race;

  btnUpdateTrack: HTMLButtonElement;

  constructor(
    btnUpdateTrack: HTMLButtonElement,
    modelUpdate: HTMLInputElement,
    removeGarage: (id: number) => void,
    setUpdateId: (id: number) => void,
    model: string,
    color: string,
    id: number,
  ) {
    this.garage = document.createElement('div');
    this.garage.classList.add('race');
    this.remove = document.createElement('button');
    this.remove.textContent = 'remove';
    this.select = document.createElement('button');
    this.select.textContent = 'select';
    this.title = document.createElement('span');

    this.title.textContent = model;
    this.modelUpdate = modelUpdate;
    this.id = id;
    this.btnUpdateTrack = btnUpdateTrack;

    this.remove.addEventListener('click', () => removeGarage(this.id));
    this.select.addEventListener('click', () => this.updateRace());
    this.select.addEventListener('click', () => setUpdateId(this.id));

    this.removeItemGarage = () => {
      this.garage.remove();
    };

    this.updateCar = (upColor, upName) => {
      if (upName) this.title.textContent = upName;
      this.race.changeColor(upColor);
    };

    this.garage.appendChild(this.remove);
    this.garage.appendChild(this.select);
    this.garage.appendChild(this.title);
    this.race = new Race(color, this.id);
  }

  renderGarage() {
    this.garage.appendChild(this.race.renderRace());
    return this.garage;
  }

  updateRace() {
    this.modelUpdate.focus();
    this.modelUpdate.disabled = false;
    this.btnUpdateTrack.disabled = false;
  }
}
export default Garage;
