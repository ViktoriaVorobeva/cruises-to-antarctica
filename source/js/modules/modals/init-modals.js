import {Modals} from './modals';

const TIME_OUT = 200;

let modals;
const headerLogo = document.querySelector('.logo__icon--phone');
const headerButton = document.querySelector('.header__navigation-toggle');
// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: false,
    startFocus: true,
    focusBack: false,
    eventTimeout: TIME_OUT,
    openCallback: () => {
      if (headerLogo) {
        headerLogo.classList.add('visually-hidden');
      }
    },
    closeCallback: () => {
      if (headerLogo) {
        headerLogo.classList.remove('visually-hidden');
      }
      headerButton.blur();
    },
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  modalElements.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
  });
  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals, TIME_OUT};
