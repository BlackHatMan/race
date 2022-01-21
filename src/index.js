import { getCars } from './js/api/api';
import Main from './js/Main';
import './style.css';

const App = new Main();
getCars().then((res) => App.render(res));
