(async () => {
  'use strict';
  const {category = '', key = ''} = document.getParameters();
  if (!(category in categories)) location.href = '/';
  YFoSPTA3.innerHTML += `<li class = 'q6kpK1jH'><a class = 'TnBfB6P0' href = '/article/?category=${category}'>${categories[category]}</a></li>`;
  const ref = key === '' ?
      database.ref('article').orderByChild('category').equalTo(category).limitToLast(4) :
      database.ref(`article/${key}`);
  const snapshot = await ref.once('value');
  const val = snapshot.val() ?? {};
  if (key === '') Object.keys(val).forEach(createListItem, val);
  else {
    const {content = '', title = ''} = val;
    if (content === '' || title === '') location.href = '/';
    else {
      document.title = title;
      YFoSPTA3.innerHTML += `<li class = 'q6kpK1jH'><a class = 'TnBfB6P0' href = '/article?category=${category}&key=${key}'>${title}</a></li>`;
      FE9UGRQR.innerHTML = `<section id = 'WSeaG6gm'>${content}</section>`;
    }
  }
  dismissDialog();
})();
