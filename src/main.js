import { CountUp } from 'countup.js';

window.onload = function () {
  const countUp1 = new CountUp('count1', 100);
  const countUp2 = new CountUp('count2', 250);
  const countUp3 = new CountUp('count3', 3469);

  countUp1.start();
  countUp2.start();
  countUp3.start();
}
