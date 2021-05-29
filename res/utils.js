'use strict';
Array.prototype.shuffle = function () {
  let index = this.length, random;
  while (index > 0) {
    random = (Math.random() * index --) | 0;
    [this[index], this[random]] = [this[random], this[index]];
  }
  return this;
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
HTMLSelectElement.prototype.getSelection = function () {
  return this.options[this.selectedIndex];
};
String.prototype.replaceAll = function (regexp, newSubstr) {
  return this.replace(new RegExp(regexp, 'g'), newSubstr);
};
String.prototype.toElement = function () {
  const div = document.createElement('div');
  div.innerHTML = this;
  return div.firstElementChild;
};
document.getParameters = () => location.search.slice(1).split('&').map(currentValue => currentValue.split('=')).reduce((accumulator, [ key, value ]) => {
  accumulator[key] = value || key;
  return accumulator;
}, {});
Math.average = (...values) => {
  values = values.filter(isNumber);
  return Math.sum.apply(null, values) / values.length;
};
Math.factorization = value => {
  const result = [];
  let divisor = 2;
  while (divisor <= value / 2) divisor % value ? divisor ++ : (result.push(divisor), value /= divisor);
  return result.concat(value);
};
Math.median = (...values) => {
  values = values.filter(isNumber);
  const index = Math.floor(values.length / 2);
  return values.length % 2 ? values[index] : (values[index - 1] + values[index]) / 2;
};
Math.sum = (...values) => values.filter(isNumber).reduce((accumulator, currentValue) => accumulator + currentValue);
window.isMobile = () => /ip(one|(a|o)d)|android.*mobile/i.test(navigator.userAgent);
window.isNumber = value => typeof value === 'number' && isFinite(value);
