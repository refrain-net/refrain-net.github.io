(async () => {
  'use strict';
  const {all = '', keyword = ''} = document.getParameters();
  let ref = database.ref('article');
  if (keyword !== '') YFoSPTA3.innerHTM += `<li class = 'q6kpK1jH'><a class = 'TnBfB6P0' href = '/?keyword=${keyword}'><span>検索結果: ${keyword}</span></a></li>`;
  else if (all === '') ref = ref.limitToLast(4);
  const snapshot = await ref.once('value');
  const val = snapshot.val() ?? {};
  Object.keys(val).filter(key => (keyword === '' || String(val[key].title).includes(keyword))).forEach(createListItem, val);
  dismissDialog();
})();
