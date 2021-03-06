window.addEventListener('load', async function() {
  storage.entry_infos = storage.entry_infos || {};

  { // Sanitize database
    for(let entry of db) {
      for(let key in entry) {
        if(db_criteria[key]) {
          // Sanitize arrays
          if(!Array.isArray(entry[key])) {
            entry[key] = [entry[key]];
          }

          // Start sanitation requests
          if(db_criteria[key].sanitation) {
            for(let i in entry[key]) {
              entry[key][i] = db_criteria[key].sanitation(entry[key][i]);
            }
          }
        }
      }

      if(entry.title in storage.entry_infos) {
        entry.info = storage.entry_infos[entry.title];
      } else {
        entry.info = db_types[entry.type].info(entry);
        entry.info.then(function(info) {
          storage.entry_infos[entry.title] = info;
        })
      }
    }
  }

  const search_type_select = document.getElementById('search_type');
  const search_criterion_select = document.getElementById('search_criterion');
  const results_div = document.getElementById('results');

  search_type_select.innerHTML += '<option value="">everything</option>';
  for(let type in db_types)
    search_type_select.innerHTML += '<option value="'+type+'">'+db_types[type].plural+'</option>';

  for(let crit in db_criteria)
    search_criterion_select.innerHTML += '<option value="'+crit+'">'+crit+'</option>';

  document.getElementById('search_button').onclick = async function() {
    const query = {
      type: search_type_select.value,
      criterion: search_criterion_select.value
    };

    const results = await search(query);
    results_div.innerHTML = '';
    const criterion = db_criteria[query.criterion];
    for(let i of results) {
      const entry = db[i.index];
      const value = entry[query.criterion][i.subindex];

      const article = document.createElement('article');
      results_div.appendChild(article);

      entry_article(criterion, value, entry, article);
    }
  }
});

async function entry_article(criterion, value, entry, article) {
  const index = document.createElement('index');
  article.appendChild(index);
  criterion.print(value, index);

  const img_wrapper = document.createElement('div');
  article.appendChild(img_wrapper)

  const img = document.createElement('img');
  img_wrapper.classList.add('img_wrapper');
  img_wrapper.appendChild(img);

  const a = document.createElement('a');
  article.appendChild(a);
  a.target = '_blank';
  a.rel = 'noopener';

  const title = document.createElement('title');
  title.innerText = entry.title;
  a.appendChild(title);

  if(entry.info instanceof Promise) {
    entry.info = await entry.info;
  }

  img.src = entry.info.img || '';
  a.href = entry.info.url;
}
