// export default class Star {
//   constructor(n, x, y, sclae) {
//     const element = document.createElement('div');
//     element.classList.add('star');
//     element.innerHTML = n;
//     element.style.cssText = `left: ${x}px; top:${y}px;`;
//     element.style.transform = `scale(${5})`;
//     document.body.append(element);
//   }
// }

export default class Star {
  constructor(n) {
    this.element = document.createElement('div');
    this.element.classList.add('star');
    this.element.innerHTML = n;

    document.body.append(this.element);
  }
}
