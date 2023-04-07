import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

const navHeader = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__navigation-toggle');
const headerLogo = document.querySelector('.header__logo');

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  navHeader.classList.remove('header__navigation--nojs');

  navToggle.addEventListener('click', function () {
    if (navHeader.classList.contains('header__navigation--closed')) {
      navHeader.classList.remove('header__navigation--closed');
      navHeader.classList.add('header__navigation--opened');
      headerLogo.classList.add('visually-hidden');
    } else {
      navHeader.classList.add('header__navigation--closed');
      navHeader.classList.remove('header__navigation--opened');
      headerLogo.classList.remove('visually-hidden');
    }
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
