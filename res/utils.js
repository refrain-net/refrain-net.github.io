'use strict';
Array.prototype.shuffle = function () {
  let index = this.length, randomIndex;
  while (index > 0) {
    randomIndex = (Math.random() * index) | 0;
    [this[index], this[randomIndex]] = [this[randomIndex], this[index]];
    index --;
  }
  return this;
};
Array.prototype.transpose = function () {
  const maxLength = Math.max(...this.map(({length}) => length));
  this.forEach(array => array.length = maxLength);
  return this[0].map((_, index) => this.map(array => array[index]));
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
HTMLElement.prototype.prependChild = function (element) {
  this.insertBefore(element, this.firstChild);
};
HTMLElement.prototype.toImage = async function ({style = ''}) {
  const {
    clientHeight: height,
    clientWidth: width
  } = this;
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
    reader.addEventListener('error', event => reject(reader.error));
    reader.addEventListener('load', event => resolve(reader.result));
    reader.readAsDataURL(blob);
  });
};
HTMLSelectElement.prototype.getSelection = function () {
  return this.options[this.selectedIndex];
};
String.prototype.replaceAll = function (regexp, newString) {
  return this.replace(new RegExp(regexp, 'g'), newString);
};
String.prototype.toElement = function () {
  const div = document.createElement('div');
  div.innerHTML = this;
  return div.firstElementChild;
};

Math.average = (...values) => Math.sum.apply(null, values) / values.length;
// num < min? min:
// num > max? max: num;
Math.clamp = (num, min, max) => Math.max(num, Math.min(num, max));
Math.factorization = value => {
  const result = [];
  let divisor = 2;
  while (divisor <= value / 2) {
    if (value % divisor) divisor ++;
    else {
      result.push(divisor);
      value /= divisor;
    }
  }
  return result.concat(value);
};
Math.median = (...values) => {
  const {length} = values;
  const index = Math.floor(length / 2);
  return length % 2? values[index]: (values[index - 1] + values[index]) / 2;
};
Math.sum = (...values) => values.reduce((accumulator, currentValue) => accumulator + currentValue);

document.getParameters = () => location.search.slice(1).split('&').map(currentValue => currentValue.split('=')).reduce((accumulator, [key, value = key]) => {
  accumulator[key] = value;
  return accumulator;
}, {});
window.isMobile = () => /ip(one|(a|o)d)|android.*mobile/i.test(navigator.userAgent);
window.sleep = delay => new Promise(resolve => setTimeout(resolve, delay));
