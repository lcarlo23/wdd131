const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

const entry = document.createElement('li');
const deleteBtn = document.createElement('button');

entry.textContent = input.value;
deleteBtn.textContent = '❌';

entry.append(deleteBtn);
list.append(entry);