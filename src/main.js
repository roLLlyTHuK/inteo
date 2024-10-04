import { CountUp } from 'countup.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

window.onload = function () {
  const countUp1 = new CountUp('count1', 100);
  const countUp2 = new CountUp('count2', 250);
  const countUp3 = new CountUp('count3', 3469);

  countUp1.start();
  countUp2.start();
  countUp3.start();
}
