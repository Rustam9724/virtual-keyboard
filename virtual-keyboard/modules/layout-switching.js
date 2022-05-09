export function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function asasa(event) {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function dfg(event) {
    pressed.delete(event.code);
  });
}
