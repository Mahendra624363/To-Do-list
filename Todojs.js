      function add() {
        var inputValue = document.getElementById('input').value;
        var li = document.createElement('li');
        li.textContent = inputValue;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
          var ol = document.getElementById('list');
          ol.removeChild(li);
        };
        
        li.appendChild(deleteButton);
        document.getElementById('list').appendChild(li);
        document.getElementById('input').value = '';
      }