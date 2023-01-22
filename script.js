'use strict';

function main (params) {
  const {all = '', category = '', keyword = ''} = params;
  const ref = all? database.ref('article'): database.ref('article').limitToLast(4);
  YFoSPTA3.innerHTML += createBreadcrumbs({key: 'category', value: category});
  YFoSPTA3.innerHTML += createBreadcrumbs({key: 'keyword', value: keyword});
  ref.once('value', snapshot => {
    const val = snapshot.val() ?? {};
    let keys = Object.keys(val);
    if (category in categories) keys = keys.filter(key => val[key].category === category);
    keys = keys.filter(key => (keyword === '' || String(val[key].title).includes(keyword)));
    createListItems(keys, val);
    dismissDialog();
  });
}

main(document.getParameters());
