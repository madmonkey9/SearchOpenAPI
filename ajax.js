function fetchPage(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      // document.querySelector('.search-engine').innerHTML = text;
      $('.search-engine').html(text);
      console.log('finish');
    });
  });
}

fetch('lists').then(function(response){
  response.text().then(function(text){
    var lists = text.split(',');
    var i=0;
    var tags='';
    console.log(text.constructor.name);
    console.log(tags.constructor.name);
    while(i<lists.length){
      var listName = lists[i].trim();
      var tag = '<div class="menu-list">'+
      '<li><a class="'+listName+'" href="#!'+listName+'" onclick="fetchPage(\''+listName+'\');">'+listName+'</a></li>'+
      '</div>';
      console.log(listName);
      tags+=tag;
      i++;
    }
    document.querySelector('.menu-lists').innerHTML = tags;
  })
});
