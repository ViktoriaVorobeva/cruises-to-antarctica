import {modals, TIME_OUT} from './modals/init-modals';

const navElements = document.querySelectorAll('.navigation__link');

const getScroll = () => {
  if (navElements) {
    navElements.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        modals.close('feedback');

        setTimeout(() => {
          const id = link.getAttribute('href');
          const target = document.querySelector(id);
          target.scrollIntoView({behavior: 'smooth'});
        }, TIME_OUT);
      });
    });
  }
};

export {getScroll};
