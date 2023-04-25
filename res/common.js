'use strict';

const categories = {
  article: '記事',
  other: 'その他',
  service: 'サービス',
  content: 'コンテンツ'
};

function createBreadcrumbs ({key = '', value = '', title = ''}) {
  if (!value) return '';
  
  const className = {
    category: 'q6kpK1jH',
    keyword: 'tvSFfqLi',
    key: 'tvSFfqLi'
  }[key];
  const href = {
    category: `/?category=${value}`,
    keyword: `/?keyword=${value}`,
    key: `/?key=${value}`
  }[key];
  const textContent = {
    category: categories[value],
    keyword: `検索結果: ${value}`,
    key: title
  }[key];
  
  return `<li class=${className}><a class="TnBfB6P0" href=${href}><span>${textContent}</span></a></li>`;
}

function createListItems (keys, val) {
  keys.sort((a, b) => val[b].date - val[a].date).forEach(key => {
    const {category = 'other', image = '/res/favicon.png', title = ''} = val[key];
    let {url = ''} = val[key];
    url ||= `/article/?category=${category}&key=${key}`;
    c6JO6k62.appendChild((`<section class="W1JhWxuv" title="${title}"><a category="${category}" class="TVOxHpZ9" href="${url}" target="_new"><span class="eFcynxxU">${title}</span><div class="RaWchbnJ"><img alt="記事のサムネイル" class="WaWu7Va9" src="${image}" /></div></a></section>`).toElement());
  });
}
  
function dismissDialog () {
  MsDGo7Eg.style.display = 'none';
  m7eOG5wP.style.animation = 'none';
}
  
SYaLdKxJ.onclick = function (event) {
  const params = [];
  const {category = ''} = document.getParameters();
  if (category !== '') params.push(`category=${category}`);
  const keyword = mWYXHFlu.value;
  if (keyword === '') return;
  params.push(`keyword=${keyword}`);
  location.href = `/?${params.join('&')}`;
}
  
mWYXHFlu.onkeydown = function (event) {
  if (event.keyCode === 13) {
    const params = [];
    const {category = ''} = document.getParameters();
    if (category !== '') params.push(`category=${category}`);
    const keyword = this.value;
    if (keyword === '') return;
    params.push(`keyword=${keyword}`);
    location.href = `/?${params.join('&')}`;
    event.preventDefault();
  }
}
  
Yzqv6tkI.onsubmit = event => false;
