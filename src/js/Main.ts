import Controls from './Controls';
import Garage from './Garage';
import {
  createCar, removeCar, updateCar, getCars, InitialData,
} from './api/api';

class Main extends Controls {
  main: HTMLDivElement;

  countCar: HTMLHeadingElement;

  page: Garage[];

  id: number;

  updateID: number;

  removeGarage: (id: number) => void;

  setUpdateId: (id: number) => void;

  updateBtn: () => void;

  nextPage: () => void;

  prevPage: () => void;

  winnerPopup: HTMLDivElement;

  next: HTMLButtonElement;

  prev: HTMLButtonElement;

  currentPageLabel: HTMLParagraphElement;

  currentPage: number;

  totalCount: number;

  wrapper: HTMLDivElement;

  constructor() {
    super();
    this.main = document.createElement('div');
    this.wrapper = document.createElement('div');
    this.main.className = 'main';
    this.main.className = 'main';
    this.countCar = document.createElement('h1');
    this.currentPage = 1;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.totalCount;
    this.updateID = 0;
    this.page = [];
    this.winnerPopup = document.createElement('div');
    this.winnerPopup.classList.add('winnerPopup');
    this.prev = document.createElement('button');
    this.next = document.createElement('button');
    this.currentPageLabel = document.createElement('h3');
    this.currentPageLabel.textContent = 'Page # 1';
    this.prev.textContent = 'prev page';
    this.next.textContent = 'next page';
    this.next.addEventListener('click', () => this.nextPage());
    this.prev.addEventListener('click', () => this.prevPage());
    this.main.appendChild(this.controls);
    this.main.appendChild(this.countCar);
    this.main.appendChild(this.winnerPopup);
    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);
    this.main.appendChild(this.currentPageLabel);
    this.main.appendChild(this.wrapper);

    this.removeGarage = (id: number) => {
      removeCar(id);
      this.page.find((el) => el.id === id).removeItemGarage();
      this.page = this.page.filter((el) => el.id !== id);
      this.countCar.textContent = `GARAGE (${this.totalCount -= 1})`;
    };

    this.setUpdateId = (id) => {
      this.updateID = id;
    };

    this.nextPage = () => {
      this.currentPageLabel.textContent = `Page # ${this.currentPage += 1}`;
      this.renderCuretPage(this.currentPage);
    };

    this.prevPage = () => {
      this.currentPageLabel.textContent = `Page # ${this.currentPage -= 1}`;
      this.renderCuretPage(this.currentPage);
    };

    this.updateBtn = () => {
      updateCar(this.updateID, this.colorPickerUpdate.value, this.modelUpdateName.value);
      this.page.find((el) => el.id === this.updateID)
        .updateCar(this.colorPickerUpdate.value, this.modelUpdateName.value);
      this.modelUpdateName.value = '';
      this.modelUpdateName.disabled = true;
      this.btnUpdateTrack.disabled = true;
    };
  }

  startAll = () => {
    const arrayTime: Array<Promise<string>> = this.page.map((el) => el.race.startRace());
    this.btnStartAll.disabled = true;
    Promise.race(arrayTime).then((resolve) => {
      this.winnerPopup.textContent = resolve;
      setTimeout(() => {
        this.btnResetAll.disabled = false;
        this.winnerPopup.innerText = '';
      }, 4000);
    });
  };

  resetAll = async () => {
    this.btnStartAll.disabled = false;
    const arrayTime: Array<Promise<void>> = this.page.map((el) => el.race.stopRace());
    await Promise.all(arrayTime);
  };

  createGarage = async () => {
    if (this.modelName.value) {
      const response = await createCar(this.modelName.value, this.colorPickerCreate.value);

      const instGarage = new Garage(
        this.btnUpdateTrack,
        this.modelUpdateName,
        this.removeGarage,
        this.setUpdateId,
        response.name,
        response.color,
        response.id,
      );

      if (this.page.length < 7) {
        this.wrapper.appendChild(instGarage.renderGarage());
      }
      this.modelName.value = '';
      this.page.push(instGarage); // not page
      this.countCar.textContent = `GARAGE (${this.totalCount += 1})`;
    }
  };

  async renderCuretPage(page: number) {
    this.wrapper.innerHTML = '';
    const { totalCount, initialData } = await getCars(page);
    this.totalCount = totalCount;

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
      this.page.push(instGarage);
      this.wrapper.appendChild(instGarage.renderGarage());
      this.countCar.textContent = `GARAGE (${this.totalCount})`;
    });
  }

  render() {
    this.renderCuretPage(this.currentPage);
    return document.body.appendChild(this.main);
  }
}
export default Main;
