import { DateTime } from './luxon.js';

const timeDate = document.querySelector('#time');
const displayDateTime = () => {
  setInterval(() => {
    const currentDate = DateTime.utc().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeDate.innerText = currentDate;
  }, 1000);
};

export default displayDateTime;