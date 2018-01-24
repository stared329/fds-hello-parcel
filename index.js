import './index.scss';
import {default as moment} from 'moment';

const clockEl = document.querySelector('clock');
// console.log(hEl);
moment.locale("ko");
setInterval(() => {
    clockEl.textContent = moment().format('LTS');
}, 1000);