const div = document.querySelector('div');

const newText = document.createElement('h2');
newText.innerText = "Welcome";
newText.style.fontSize="2em"

div.prepend(newText);