import './theme';
import menuItems from './menu.json';
import menuItemTemplate from './templates/menu-item.hbs';
import './styles.css';


const markup = menuItemTemplate(menuItems[0]);
// console.log(markup);

const refs = {
  jsMenu: document.querySelector('.js-menu'),
}

// refs.jsMenu.insertAdjacentHTML('beforeend', markup);
buildMenuItem(menuItems);

function buildMenuItem(munuItems) {
  const markup = munuItems.map(munuItem => menuItemTemplate(munuItem)).join('');
  refs.jsMenu.insertAdjacentHTML('beforeend', markup);
}
