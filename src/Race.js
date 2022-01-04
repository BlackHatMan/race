import { Track } from './Track';
 
export class Race extends Track {
  constructor() { 
    super();
    this.race = document.createElement('div');
    this.race.classList.add('race');
    this.remove = document.createElement('button');
    this.remove.textContent = 'remove';
    this.select = document.createElement('button');
    this.select.textContent = 'select';
    this.title = document.createElement('span');
   
    this.race.appendChild(this.remove);
    this.race.appendChild(this.select); 
    this.race.appendChild(this.title); 
  }

  renderRace(color, model) {  
    this.title.textContent = model;
    this.race.appendChild( this.renderTrack(color));
    return this.race;
  } 
}
