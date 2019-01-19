function fetchPage(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('.search-engine').innerHTML = text;
    });
  });
}

fetch('lists').then(function(response){
  response.text().then(function(text){
    var lists = text.split(',');
    var i=0;
    var tags='';
    while(i<lists.length){
      tag = '<div class="menu-list">'+
      '<li><a class="'+lists[i].trim()+'" href="#!'+lists[i].trim()+'" onclick="fetchPage(\''+lists[i]+'.js\');">'+lists[i]+'</a></li>'+
      '</div>';
      console.log(lists[i].trim());
      tags+=tag;
      i++;
    }
    document.querySelector('.menu-lists').innerHTML = tags;
  })
});
