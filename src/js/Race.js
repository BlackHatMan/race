import { Track } from './Track';

export class Race {
  constructor(color, model, modelUpdate) {
    this.race = document.createElement('div');
    this.race.classList.add('race');
    this.remove = document.createElement('button');
    this.remove.textContent = 'remove';
    this.remove.addEventListener('click', () => this.race.remove())
    this.select = document.createElement('button');
    this.select.addEventListener('click', () => this.replaceRace(modelUpdate))
    this.select.textContent = 'select';
    this.title = document.createElement('span');

    this.race.appendChild(this.remove);
    this.race.appendChild(this.select);
    this.race.appendChild(this.title);

    this.color = color
    this.title.textContent = model

  }

  renderRace(id) {
    const track = new Track()
    this.ID = id

    this.race.appendChild(track.renderTrack(this.color, id));
    return this.race;
  }
  replaceRace(modelUpdate) {
    modelUpdate.focus()
    modelUpdate.dataset.id = this.ID
  }
}
