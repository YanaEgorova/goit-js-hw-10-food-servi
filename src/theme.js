const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  jsSwitchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
}


let persistedTheme = localStorage.getItem('theme');


if (persistedTheme === "dark-theme") {
  refs.body.classList.add(Theme.DARK)
  refs.jsSwitchInput.setAttribute('checked', true)
} else {
  refs.body.classList.remove(Theme.DARK)
  refs.body.classList.add(Theme.LIGHT)
}




refs.jsSwitchInput.addEventListener('change', e => {

  if (e.currentTarget.checked) {
    refs.body.classList.add(Theme.DARK)
    localStorage.setItem('theme', Theme.DARK)
  } else {
    refs.body.classList.remove(Theme.DARK)
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem('theme', Theme.LIGHT)
  }
})
