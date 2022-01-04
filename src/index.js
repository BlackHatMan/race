import { Race } from './Race';
import './style.css';

const main = document.querySelector('.main');

const race = new Race();
const race1 = new Race();
main.appendChild(race.renderRace('green', 'Tesla'));
main.appendChild(race1.renderRace('red', 'Jiga'));
