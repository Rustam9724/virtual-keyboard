export function keyIlluminationOn(keyboard, keys, event) {
  if (keys.findIndex(elem => elem.code === event.code) !== -1) {
    event.preventDefault();
    keyboard.children[keys.findIndex(elem => elem.code === event.code)].classList.add('key_hover');
  }
}

export function keyIlluminationOff(keyboard, keys, event) {
  if (keys.findIndex(elem => elem.code === event.code) !== -1) keyboard.children[keys.findIndex(elem => elem.code === event.code)].classList.remove('key_hover');
}
