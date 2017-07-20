var table_data = [
              { first_name : 'Rose',
               last_name  : 'Tyler',
               home       : 'Earth' },
             { first_name : 'Zoe',
               last_name  : 'Heriot',
               home       : 'Space Station W3'},
             { first_name : 'Jo',
               last_name  : 'Grant',
               home       : 'Earth'},
             { first_name : 'Leela',
               last_name  : null,
               home       : 'Unspecified'},
             { first_name : 'Romana',
               last_name  : null,
               home       : 'Gallifrey'},
             { first_name : 'Clara',
               last_name  : 'Oswald',
               home       : 'Earth'},
             { first_name : 'Adric',
               last_name  : null,
               home       : 'Alzarius'},
             { first_name : 'Susan',
               last_name  : 'Foreman',
               home       : 'Gallifrey'} ];

function getTable(arr){
  var data = document.getElementById('tableName');
// var htmlString = "<table></thead><tr>"
for (var i=0; i<arr.length; i++){
  var person = arr[i];
  var row = document.createElement('tr');
  var key = ['first_name', 'last_name', 'home'];

    for (var c=0; c < key.length; c++){
      var cell = document.createElement('td');
      cell.innerHTML= person[key[c]];
      if (person[key[c]]== null){
        cell.innerHTML = ("Missing Info");
      }
      row.appendChild(cell);
    }
    data.appendChild(row);
  }
}

getTable(table_data);
