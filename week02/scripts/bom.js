const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const entry = document.createElement('li');
        const deleteBtn = document.createElement('button');

        entry.textContent = input.value;
        deleteBtn.textContent = '❌';

        entry.append(deleteBtn);
        list.append(entry);

        deleteBtn.addEventListener('click', function () {
            list.removeChild(entry);
            input.focus();
        });

        input.value = '';
        input.focus();
    } else {
        input.focus();
        return;
    }
})