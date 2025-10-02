const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    const value = input.value.trim();

    if (value !== '') {
        displayList(value);
        chaptersArray.push(value);

        setChapterList();

        input.value = '';
        input.focus();
    } else {
        input.focus();
        return;
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.textContent = item;
    deleteBtn.textContent = '❌';

    li.append(deleteBtn);
    list.append(li);

    deleteBtn.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    chaptersArray = chaptersArray.filter((item) => item !== chapter)

    setChapterList();
}