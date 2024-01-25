'use strict';
Array.prototype.shuffle = function (inplace = false) {
  const self = inplace? this: [...this];
  
  for (let i = self.length - 1, tmp; tmp = (Math.random() * i ) | 0, i >= 0; i --) {
    [self[i], self[tmp]] = [self[tmp], self[i]];
  }
  
  return self;
};

Array.prototype.transpose = function () {
  const len = Math.max(...this.map(xi => xi.length));
  
  this.forEach(xi => xi.length = len);
  
  return this[0].map((_, i) => this.map(xi => xi[i]));
};

Date.prototype.isWeekend = function () {
  return this.getDay() % 6 === 0;
};

HTMLElement.prototype.copy = function () {
  const onCopy = event => {
    const {clipboardData} = event;
    clipboardData.setData('text/html', this.outerHTML);
    clipboardData.setData('text/plain', this.outerHTML);
    event.preventDefault();
    document.removeEventListener('copy', onCopy, false);
  };
  
  document.addEventListener('copy', onCopy, false);
  document.execCommand('copy');
};

HTMLElement.prototype.prependChild = function (el) {
  if (!el instanceof HTMLElement) throw new TypeError('"el" must be instance of "HTMLElement"');
  
  this.insertBefore(el, this.firstChild);
};

HTMLElement.prototype.toImage = async function ({style = ''} = {}) {
  const {clientHeight: height, clientWidth: width} = this;
  
  const serializer = new XMLSerializer();
  const svg = `<svg height="${height}px" viewBox="0 0 ${width} ${height}" width="${width}px" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="${width}" height="${height}">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>${style}</style>
      ${serializer.serializeToString(this)}
    </div>
  </foreignObject>
</svg>`;
  
  const blob = new Blob([svg], {type: 'image/svg+xml;charset=utf-8'});
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = _ => reject(reader.error);
    reader.onload = _ => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

HTMLSelectElement.prototype.getSelection = function () {
  return this.options[this.selectedIndex];
};

String.prototype.replaceAll = function (pattern, replacement) {
  if (type(pattern) !== 'string') throw new TypeError('"pattern" must be a string');
  if (type(replacement) !== 'string') throw new TypeError('"replacement" must be a string');
  
  return this.replace(new RegExp(pattern, 'g'), replacement);
};

String.prototype.toElement = function () {
  const div = document.createElement('div');
  div.innerHTML = this;
  
  return div.firstElementChild;
};

Math.average = values => {
  if (type(values) !== 'array') throw new TypeError('"values" must be an array');
  
  return Math.sum(values) / values.length;
};

Math.clamp = (value, lower, upper) => {
  if (type(value) !== 'number') throw new Type≦Error('"value" must be a number');
  if (type(lower) !== 'number') throw new TypeError('"lower" must be a number');
  if (type(upper) !== 'number') throw new TypeError('"upper" must be a number');

  if (lower >= upper) throw new Error('"lower" must be less than "upper"');
  
  return Math.max(lower, Math.min(value, upper));
};

Math.factorization = value => {
  if (type(value) !== 'number') throw new Type≦Error('"value" must be a number');
  
  const ret = [];
  let div = 2;
  while (div <= value / 2) {
    if (value % div) div ++;
    else {
      ret.push(div);
      value /= div;
    }
  }
  return ret;
};

Math.median = values => {
  if (type(values) !== 'array') throw new TypeError('"values" must be an array');
  
  const index = ~~(values.length / 2);
  
  if (length % 2) return values[index];
  return (values[index - 1] + values[index]) / 2;
};

Math.sum = (values, fn = xi => xi) => {
  if (type(values) !== 'array') throw new TypeError('"values" must be an array');
  if (type(fn) !== 'function') throw new TypeError('"fn" must be a function');

  values = values.map(fn);
  
  return values.reduce((ret, xi) => ret + xi);
};

document.getParameters = () => location.search.slice(1)
    .split('&')
    .map(xi => xi.split('='))
    .reduce((ret, xi) => {
  const [key, value] = xi;
  ret[key] = value || true;
  return ret;
}, {});

window.isMobile = () => /ip(one|(a|o)d)|android.*mobile/i.test(navigator.userAgent);

window.isNumber = value => typeof value === 'number' && isFinite(value);

window.sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

window.type = value => Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
