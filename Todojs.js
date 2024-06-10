document.addEventListener('DOMContentLoaded', function() {
  loadList();
});

function loadList() {
  var list = JSON.parse(localStorage.getItem('todoList')) || [];
  list.forEach(function(item) {
    createListItem(item.text, item.completed);
  });
}

function saveList() {
  var ol = document.getElementById('list');
  var listItems = [];
  for (var i = 0; i < ol.children.length; i++) {
    var li = ol.children[i];
    listItems.push({
      text: li.querySelector('.item-text').textContent,
      completed: li.querySelector('.item-text').style.textDecoration === 'line-through'
    });
  }
  localStorage.setItem('todoList', JSON.stringify(listItems));
}

function createListItem(text, completed = false) {
  var li = document.createElement('li');

  var span = document.createElement('span');
  span.className = 'item-text';
  span.textContent = text;
  if (completed) {
    span.style.textDecoration = 'line-through';
  }

  span.ondblclick = function() {
    if (span.style.textDecoration === 'line-through') {
      span.style.textDecoration = 'none';
    } else {
      span.style.textDecoration = 'line-through';
    }
    saveList();
  };

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    var ol = document.getElementById('list');
    ol.removeChild(li);
    saveList();
  };

  li.appendChild(span);
  li.appendChild(deleteButton);
  document.getElementById('list').appendChild(li);
}

function add() {
  var inputValue = document.getElementById('input').value;
  if (inputValue.trim() !== '') {
    createListItem(inputValue);
    saveList();
    document.getElementById('input').value = '';
  }
}
