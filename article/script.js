'use strict';
const { category = '', key = '' } = document.getQueryParameters();
if (!(category in categories)) location.href = '/';
YFoSPTA3.appendChild((`<li class = 'q6kpK1jH'>
  <a class = 'TnBfB6P0' href = '/article/?category=${category}'>${categories[category]}</a>
</li>`).toElement());
const ref = key === ''
    ? database.ref('article').orderByChild('category').equalTo(category).limitToLast(4)
    : database.ref(`article/${key}`);
ref.once('value', snapshot => {
  const val = snapshot.val() ?? { };
  if (key === '') Object.keys(val).forEach(createListItem, val);
  else {
    const { content = '', title = '' } = val;
    if (content === '' || title === '') location.href = '/';
    else {
      document.title = title;
      YFoSPTA3.innerHTML += `<li class = 'q6kpK1jH'><a class = 'TnBfB6P0' href = '/article?category=${category}&key=${key}'>${title}</a></li>`;
      FE9UGRQR.innerHTML = `<section id = 'WSeaG6gm'>${content}</section>`;
    }
  }
  dismissDialog();
});
