import { addingSymbols } from './modules/adding-symbols.js';
import { keyIlluminationOn, keyIlluminationOff } from './modules/key-illumination.js';
import { runOnKeys } from './modules/layout-switching.js';

// Создание JSON клавиш
class Keys {
  constructor(code, symbol, secondSymbol, rusSymbol, secRusSymbol, cls) {
    this.code = code;
    this.symbol = symbol;
    this.secondSymbol = secondSymbol;
    this.rusSymbol = rusSymbol;
    this.secRusSymbol = secRusSymbol;
    this.class = cls;
  }
}

export let keys = [
  new Keys('Backquote', '`', '~', 'ё', 'Ё', 'key__number'),
  new Keys('Digit1', '1', '!', null, null, 'key__number'),
  new Keys('Digit2', '2', '@', null, null, 'key__number'),
  new Keys('Digit3', '3', '#', null, null, 'key__number'),
  new Keys('Digit4', '4', '$', null, null, 'key__number'),
  new Keys('Digit5', '5', '%', null, null, 'key__number'),
  new Keys('Digit6', '6', '^', null, null, 'key__number'),
  new Keys('Digit7', '7', '&', null, null, 'key__number'),
  new Keys('Digit8', '8', '*', null, null, 'key__number'),
  new Keys('Digit9', '9', '(', null, null, 'key__number'),
  new Keys('Digit0', '0', ')', null, null, 'key__number'),
  new Keys('Minus', '-', '_', null, null, 'key__number'),
  new Keys('Equal', '=', '+', null, null, 'key__number'),
  new Keys('Backspace', 'Backspace', null, null, null, 'key__manage'),
  new Keys('Tab', 'Tab', null, null, null, 'key__manage'),
  new Keys('KeyQ', 'q', 'Q', 'й', 'Й', 'key__symbol'),
  new Keys('KeyW', 'w', 'W', 'ц', 'Ц', 'key__symbol'),
  new Keys('KeyE', 'e', 'E', 'у', 'У', 'key__symbol'),
  new Keys('KeyR', 'r', 'R', 'к', 'К', 'key__symbol'),
  new Keys('KeyT', 't', 'T', 'е', 'Е', 'key__symbol'),
  new Keys('KeyY', 'y', 'Y', 'н', 'Н', 'key__symbol'),
  new Keys('KeyU', 'u', 'U', 'г', 'Г', 'key__symbol'),
  new Keys('KeyI', 'i', 'I', 'ш', 'Ш', 'key__symbol'),
  new Keys('KeyO', 'o', 'O', 'щ', 'Щ', 'key__symbol'),
  new Keys('KeyP', 'p', 'P', 'х', 'Х', 'key__symbol'),
  new Keys('BracketLeft', '[', '{', 'х', 'Х', 'key__symbol'),
  new Keys('BracketRight', ']', '}', 'ъ', 'Ъ', 'key__symbol'),
  new Keys('Backslash', '\\', '\\', '\\', '\\', 'key__symbol'),
  new Keys('Delete', 'DEL', null, null, null, 'key__manage'),
  new Keys('CapsLock', 'Caps Lock', null, null, null, 'key__manage'),
  new Keys('KeyA', 'a', 'A', 'ф', 'Ф', 'key__symbol'),
  new Keys('KeyS', 's', 'S', 'ы', 'Ы', 'key__symbol'),
  new Keys('KeyD', 'd', 'D', 'в', 'В', 'key__symbol'),
  new Keys('KeyF', 'f', 'F', 'а', 'А', 'key__symbol'),
  new Keys('KeyG', 'g', 'G', 'п', 'П', 'key__symbol'),
  new Keys('KeyH', 'h', 'H', 'р', 'Р', 'key__symbol'),
  new Keys('KeyJ', 'j', 'J', 'о', 'О', 'key__symbol'),
  new Keys('KeyK', 'k', 'K', 'л', 'Л', 'key__symbol'),
  new Keys('KeyL', 'l', 'L', 'д', 'Д', 'key__symbol'),
  new Keys('Semicolon', ';', ':', 'ж', 'Ж', 'key__symbol'),
  new Keys('Quote', '\'', '"', 'э', 'Э', 'key__symbol'),
  new Keys('Enter', 'Enter', null, null, null, 'key__manage'),
  new Keys('ShiftLeft', 'Shift', null, null, null, 'key__manage'),
  new Keys('KeyZ', 'z', 'Z', 'я', 'Я', 'key__symbol'),
  new Keys('KeyX', 'x', 'X', 'ч', 'Ч', 'key__symbol'),
  new Keys('KeyC', 'c', 'C', 'с', 'С', 'key__symbol'),
  new Keys('KeyV', 'v', 'V', 'м', 'М', 'key__symbol'),
  new Keys('KeyB', 'b', 'B', 'и', 'И', 'key__symbol'),
  new Keys('KeyN', 'n', 'N', 'т', 'Т', 'key__symbol'),
  new Keys('KeyM', 'm', 'M', 'ь', 'Ь', 'key__symbol'),
  new Keys('Comma', ',', '<', 'б', 'Б', 'key__symbol'),
  new Keys('Period', '.', '>', 'ю', 'Ю', 'key__symbol'),
  new Keys('Slash', '?', '?', '.', '.', 'key__symbol'),
  new Keys('ArrowUp', '&#9650;', null, null, null, 'key__manage'),
  new Keys('ShiftRight', 'Shift', null, null, null, 'key__manage'),
  new Keys('ControlLeft', 'Ctrl', null, null, null, 'key__manage'),
  new Keys('MetaLeft', 'Win', null, null, null, 'key__manage'),
  new Keys('AltLeft', 'Alt', null, null, null, 'key__manage'),
  new Keys('Space', ' ', null, null, null, 'key__manage'),
  new Keys('AltRight', 'Alt', null, null, null, 'key__manage'),
  new Keys('ControlRight', 'Ctrl', null, null, null, 'key__manage'),
  new Keys('ArrowLeft', '&#9668;', null, null, null, 'key__manage'),
  new Keys('ArrowDown', '&#9660;', null, null, null, 'key__manage'),
  new Keys('ArrowRight', '&#9658;', null, null, null, 'key__manage')
];

// // Создание внешнего вида клавиатуры
let body = document.querySelector('body');
let wrapper = document.createElement('div');
let container = document.createElement('div');
let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');
let infoBlock = document.createElement('div');
let languageSwitchingInfo = document.createElement('p');
let registerInfo = document.createElement('div');
wrapper.classList.add('wrapper');
container.classList.add('container');
keyboard.classList.add('keyboard');
infoBlock.classList.add('infoblock');
languageSwitchingInfo.classList.add('infoblock__info');
registerInfo.classList.add('infoblock__info');
languageSwitchingInfo.textContent = 'Для изменения языка нажмите комбинацию клавищ Shift + Alt на физической клавиатуре';
registerInfo.textContent = 'Для изменения регистра нажмите CapsLock или зажмите Shift';
body.append(wrapper);
wrapper.append(container);
container.append(textarea);
container.append(keyboard);
container.append(infoBlock);
infoBlock.append(languageSwitchingInfo);
infoBlock.append(registerInfo);

for (let i = 0; i < 64; i += 1) {
  let key = document.createElement('div');
  key.classList.add('key');
  keyboard.append(key);
}

let backspaceKey = keyboard.children[13];
let tabKey = keyboard.children[14];
let deleteKey = keyboard.children[28];
let capsLook = keyboard.children[29];
let enterKey = keyboard.children[41];
let leftShiftKey = keyboard.children[42];
let leftCtrlKey = keyboard.children[56];
let rightCtrlKey = keyboard.children[60];
let spaceKey = keyboard.children[58];
backspaceKey.style.width = '91px';
tabKey.style.width = '45px';
deleteKey.style.width = '39px';
capsLook.style.width = '91px';
enterKey.style.width = '87px';
leftShiftKey.style.width = '138px';
leftCtrlKey.style.width = '60px';
rightCtrlKey.style.width = '60px';
spaceKey.style.width = '286px';
textarea.disabled = true;

// Добавление надписей клавиатуры
addingSymbols(keyboard, keys);

// Выделение клавиши виртуальной клавиатуры при нажатии её аналога на физической клавиатуре
document.addEventListener('keydown', function keyIlluminationOnn(event) {
  keyIlluminationOn(keyboard, keys, event);
});

document.addEventListener('keyup', function keyIlluminationOf(event) {
  keyIlluminationOff(keyboard, keys, event);
});
// Перключение раскладки
let language = 'en';

runOnKeys(function runOnKeysS() {
  if (language === 'en') {
    language = 'ru';
    localStorage.setItem(language, 'ru');
  } else {
    language = 'en';
    localStorage.setItem(language, 'en');
  }
  for (let i = 15; i < 52; i += 1) {
    if (keyboard.children[i].classList.contains('key__symbol')) {
      if (language === 'en') {
        keyboard.children[i].firstChild.innerHTML = keys[i].symbol.toUpperCase();
      } else if (language === 'ru') {
        keyboard.children[i].firstChild.innerHTML = keys[i].secRusSymbol;
      }
    }
  }
  if (language === 'en') {
    keyboard.children[52].firstChild.innerHTML = keys[52].symbol;
  } else if (language === 'ru') {
    keyboard.children[52].firstChild.innerHTML = keys[52].rusSymbol;
  }
}, 'ShiftLeft', 'AltLeft');

// Ввод символов в текстоволе поле при помощи физической клавиатуры
let register = false;
document.addEventListener('keydown', function qwqw(event) {
  if (keys.findIndex(elem => elem.code === event.code) !== -1) {
    if (keys[keys.findIndex(elem => elem.code === event.code)].class === 'key__number') {
      if (!event.shiftKey) {
        textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)].symbol;
      } else {
        textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)].secondSymbol;
      }
    } else if (event.code === 'Backspace') {
      textarea.textContent = textarea.textContent.slice(0, textarea.textContent.length - 1);
    } else if (event.code === 'Enter') {
      textarea.textContent += '\n';
    } else if (/^Arrow\w{2,}$/.test(event.code)) {
      if (event.code === 'ArrowUp') textarea.innerHTML += '&uarr;';
      else if (event.code === 'ArrowLeft') textarea.innerHTML += '&larr;';
      else if (event.code === 'ArrowRight') textarea.innerHTML += '&rarr;';
      else if (event.code === 'ArrowDown') textarea.innerHTML += '&darr;';
    } else if (event.code === 'Tab') {
      event.preventDefault();
      textarea.textContent += '    ';
    } else if (event.code === 'Space') {
      textarea.textContent += ' ';
    } else if (keys[keys.findIndex(elem => elem.code === event.code)].class === 'key__symbol') {
      if (language === 'en') {
        if (register === false) {
          if (!event.shiftKey) {
            textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)].symbol;
          } else {
            textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)]
              .secondSymbol;
          }
        } else if (!event.shiftKey) {
          textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)]
            .secondSymbol;
        } else {
          textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)].symbol;
        }
      } else if (language === 'ru') {
        if (register === false) {
          if (!event.shiftKey) {
            textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)]
              .rusSymbol;
          } else {
            textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)]
              .secRusSymbol;
          }
        } else if (!event.shiftKey) {
          textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)]
            .secRusSymbol;
        } else {
          textarea.textContent += keys[keys.findIndex(elem => elem.code === event.code)]
            .rusSymbol;
        }
      }
    } else if (event.code === 'CapsLock') {
      register = !register;
    } else if (event.code === 'Delete') {
      textarea.textContent = textarea.textContent.slice(1);
    }
  }
});

// Ввод символов при клике на клавиши виртуальной клавиатуры
keyboard.addEventListener('click', function asas(event) {
  var target = event.target.closest('div.key');
  if (event.target.closest('div.key')) {
    if (target.classList.contains('key__number')) {
      let sym = keys[keys.findIndex(elem => elem.symbol === target.lastChild.textContent)].symbol;
      textarea.textContent += sym;
    } else if (target.firstChild.textContent === 'Backspace') {
      textarea.textContent = textarea.textContent.slice(0, textarea.textContent.length - 1);
    } else if (target.classList.contains('key__symbol')) {
      if (language === 'en') {
        if (register === false) {
          let sym = keys
            .findIndex(elem => elem.symbol.toUpperCase() === target.firstChild.textContent);
          textarea.textContent += keys[sym].symbol;
        } else {
          let sym = keys
            .findIndex(elem => elem.symbol.toUpperCase() === target.firstChild.textContent);
          textarea.textContent += keys[sym].secondSymbol;
        }
      } else if (language === 'ru') {
        if (register === false) {
          let sym = keys
            .findIndex(elem => elem.secRusSymbol === target.firstChild.textContent);
          textarea.textContent += keys[sym].rusSymbol;
        } else {
          let sym = keys
            .findIndex(elem => elem.secRusSymbol === target.firstChild.textContent);
          textarea.textContent += keys[sym].secRusSymbol;
        }
      }
    } else if (target.firstChild.textContent === 'Tab') {
      textarea.textContent += '    ';
    } else if (target.firstChild.textContent === 'Enter') {
      textarea.textContent += '\n';
    } else if (target.firstChild.textContent === '▲' || target.firstChild.textContent === '◄' || target.firstChild.textContent === '▼' || target.firstChild.textContent === '►') {
      textarea.textContent += target.firstChild.textContent;
    } else if (target.firstChild.textContent === 'Caps Lock') {
      register = !register;
    } else if (target.firstChild.textContent === '.') {
      textarea.textContent += '.';
    } else if (target.firstChild.textContent === 'DEL') {
      textarea.textContent = textarea.textContent.slice(1);
    } else if (target.firstChild.textContent === ' ') {
      textarea.textContent += ' ';
    }
  }
});

keyboard.addEventListener('mousedown', function njnj(event) {
  var target = event.target.closest('div.key');
  if (event.target.closest('div.key')) {
    target.classList.add('key_hover');
  }
});

keyboard.addEventListener('mouseup', function lkj(event) {
  var target = event.target.closest('div.key');
  if (event.target.closest('div.key')) {
    target.classList.remove('key_hover');
  }
});
