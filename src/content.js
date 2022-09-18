const div = document.querySelector('div');

const newText = document.createElement('h2');
newText.innerText = "Welcome";
newText.classList.add("newText")

div.prepend(newText);