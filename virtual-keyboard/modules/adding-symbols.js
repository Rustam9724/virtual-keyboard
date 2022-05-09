export function addingSymbols(keyboard, keys) {
  for (let i = 0; i < 64; i += 1) {
    // Добавление всем клавишам класса класса
    keyboard.children[i].classList.add(keys[i].class);

    // Добавление символов в клавиши
    if (keyboard.children[i].classList.contains('key__number')) {
      let topLeftSymbol = document.createElement('div');
      keyboard.children[i].append(topLeftSymbol);
      topLeftSymbol.classList.add('top-left-symbol');
      topLeftSymbol.innerHTML = keys[i].secondSymbol;
      let centerSymbol = document.createElement('div');
      keyboard.children[i].append(centerSymbol);
      centerSymbol.classList.add('center-symbol');
      centerSymbol.innerHTML = keys[i].symbol;
    } else if (keyboard.children[i].classList.contains('key__manage')) {
      let manageText = document.createElement('div');
      keyboard.children[i].append(manageText);
      manageText.classList.add('manage__text');
      manageText.innerHTML = keys[i].symbol;
    } else if (keyboard.children[i].classList.contains('key__symbol')) {
      let symbol = document.createElement('div');
      keyboard.children[i].append(symbol);
      symbol.classList.add('center-symbol');
      symbol.innerHTML = keys[i].symbol.toUpperCase();
    }
  }
}
