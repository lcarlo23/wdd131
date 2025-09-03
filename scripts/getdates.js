const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

const today = new Date();

year.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`