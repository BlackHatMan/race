import Controls from './Controls';
import Garage from './Garage';
import {
  createCar, removeCar, updateCar, getCars, InitialData,
} from './api/api';
import modelsCars from './api/models-cars';
import brandsCars from './api/brands-cars';

interface IPage {
  [key: number]: Garage[]
}
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

  cachedPage: IPage;

  generateRnd: () => void;

  constructor() {
    super();
    this.main = document.createElement('div');
    this.wrapper = document.createElement('div');
    this.main.className = 'main';
    this.main.className = 'main';
    this.countCar = document.createElement('h1');
    this.currentPage = 1;
    this.cachedPage = {};
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
      this.cachedPage[this.currentPage] = [...this.page];
      this.countCar.textContent = `GARAGE (${this.totalCount -= 1})`;
    };

    this.setUpdateId = (id) => {
      this.updateID = id;
    };

    this.nextPage = () => {
      if (this.currentPage < Math.ceil(this.totalCount / 7)) {
        this.currentPageLabel.textContent = `Page # ${this.currentPage += 1}`;
        this.renderCurrentPage(this.currentPage);
      }
    };

    this.prevPage = () => {
      if (this.currentPage > 1) {
        this.currentPageLabel.textContent = `Page # ${this.currentPage -= 1}`;
        this.renderCurrentPage(this.currentPage);
      }
    };

    this.updateBtn = () => {
      updateCar(this.updateID, this.colorPickerUpdate.value, this.modelUpdateName.value);
      this.page.find((el) => el.id === this.updateID)
        .updateCar(this.colorPickerUpdate.value, this.modelUpdateName.value);
      this.modelUpdateName.value = '';
      this.modelUpdateName.disabled = true;
      this.btnUpdateTrack.disabled = true;
    };
    this.generateRnd = async () => {
      const rndPromise = [];
      for (let i = 0; i < 100; i += 1) {
        const rnd = Math.floor(Math.random() * 50);
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        const model = `${brandsCars[rnd]} ${modelsCars[rnd]}`;
        rndPromise.push(createCar(model, randomColor));
      }
      await Promise.all(rndPromise);
      this.render();
    };
  }

  startAll = () => {
    const arrayTime: Array<Promise<string>> = this.cachedPage[this.currentPage]
      .map((el) => el.race.startRace());
    this.btnStartAll.disabled = true;
    Promise.race(arrayTime).then((resolve) => {
      this.winnerPopup.textContent = resolve;
      setTimeout(() => {
        this.btnResetAll.disabled = false;
        this.winnerPopup.innerText = '';
      }, 3000);
    });
  };

  resetAll = async () => {
    this.btnStartAll.disabled = false;
    const arrayTime: Array<Promise<void>> = this.cachedPage[this.currentPage]
      .map((el) => el.race.stopRace());
    await Promise.all(arrayTime);
    this.btnResetAll.disabled = true;
  };

  createGarage = async () => {
    if (this.modelName.value) {
      const response = await createCar(this.modelName.value, this.colorPickerCreate.value);
      if (this.page.length < 7) {
        const instGarage = new Garage(
          this.btnUpdateTrack,
          this.modelUpdateName,
          this.removeGarage,
          this.setUpdateId,
          response.name,
          response.color,
          response.id,
        );
        this.wrapper.appendChild(instGarage.renderGarage());
        this.page.push(instGarage);
        this.cachedPage[this.currentPage] = [...this.page];
      }
      this.modelName.value = '';
      this.countCar.textContent = `GARAGE (${this.totalCount += 1})`;
    }
  };

  async renderCurrentPage(pageNumber: number) {
    this.wrapper.innerHTML = '';
    this.page = [];
    if (this.cachedPage[pageNumber] && this.cachedPage[pageNumber].length > 6) {
      this.cachedPage[pageNumber].forEach((garageItem) => this.wrapper
        .appendChild(garageItem.renderGarage()));
      this.page = [...this.cachedPage[pageNumber]];
      return;
    }
    const { totalCount, initialData } = await getCars(pageNumber);
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

    this.cachedPage[pageNumber] = [...this.page];
  }

  render() {
    this.renderCurrentPage(this.currentPage);
    return document.body.appendChild(this.main);
  }
}
export default Main;
