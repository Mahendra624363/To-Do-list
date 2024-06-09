document.addEventListener('DOMContentLoaded', function() {
  loadList();
});

function loadList() {
  var list = JSON.parse(localStorage.getItem('todoList')) || [];
  list.forEach(function(item) {
    createListItem(item);
  });
}

// Function to save the current list to local storage
function saveList() {
  var ol = document.getElementById('list');
  var listItems = [];
  for (var i = 0; i < ol.children.length; i++) {
    listItems.push(ol.children[i].firstChild.textContent);
  }
  localStorage.setItem('todoList', JSON.stringify(listItems));
}

// Function to create a list item element
function createListItem(text) {
  var li = document.createElement('li');
  li.textContent = text;

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    var ol = document.getElementById('list');
    ol.removeChild(li);
    saveList();
  };

  li.appendChild(deleteButton);
  document.getElementById('list').appendChild(li);
}

// Function to add a new item to the list
function add() {
  var inputValue = document.getElementById('input').value;
  if (inputValue.trim() !== '') {
    createListItem(inputValue);
    saveList();
    document.getElementById('input').value = '';
  }
}
