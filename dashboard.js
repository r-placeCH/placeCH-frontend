var button = document.getElementById('details');
var popup = document.getElementById('popup');
var close = document.getElementById('close');

button.addEventListener('click', function(){
  popup.style.display = 'grid';
})

close.addEventListener('click', function(){
  popup.style.display = 'none';
})