'use strict';

function main (params) {
  const {category = '', key = ''} = params;
  if (!categories[category]) location.href = '/';
  if (key === '') location.href = `/?category=${category}`;
  YFoSPTA3.innerHTML += createBreadcrumbs({key: 'category', value: category});
  const ref = database.ref(`article/${key}`);
  ref.once('value').then(snapshot => {
    const val = snapshot.val() ?? {};
    const {content = '', title = ''} = val;
    if (content === '' || title === '') return location.href = '/';
    document.title = `${title} - refrain.net`;
    YFoSPTA3.innerHTML += createBreadcrumbs({key: 'key', value: key, title});
    FE9UGRQR.innerHTML = `<section id="WSeaG6gm">${content}</section>`;
    dismissDialog();
  });
}

main(document.getParameters());
