const menuButton = document.getElementById('menu');
const nav = document.querySelector('header nav');
const pageTitle = document.querySelector('main h2');
const templesDiv = document.getElementById('temples');
const homeBtn = document.getElementById('home');
const oldBtn = document.getElementById('old');
const newBtn = document.getElementById('new');
const largeBtn = document.getElementById('large');
const smallBtn = document.getElementById('small');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    nav.classList.toggle('show');
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
    },
];

function createTempleCards(templeList) {
    templesDiv.innerHTML = "";

    templeList.forEach(temple => {
        let card = document.createElement('div');
        let dataBox = document.createElement('div');
        let title = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let size = document.createElement('p');
        let img = document.createElement('img');

        title.textContent = temple.templeName;
        location.innerHTML = `<span>LOCATION:</span> ${temple.location}`;
        dedication.innerHTML = `<span>DEDICATED:</span> ${temple.dedicated}`;
        size.innerHTML = `<span>SIZE:</span> ${temple.area} sq ft`;

        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Photo`);
        img.setAttribute('width', '400');
        img.setAttribute('height', '300');
        img.setAttribute('loading', 'lazy');

        dataBox.appendChild(title);
        dataBox.appendChild(location);
        dataBox.appendChild(dedication);
        dataBox.appendChild(size);
        card.appendChild(dataBox);
        card.appendChild(img);

        card.classList.add('card');

        templesDiv.appendChild(card);

    });
}

createTempleCards(temples);

const oldTemples = temples.filter((temple) => {
    year = temple.dedicated.split(', ')[0];
    if (year < 1900) return year;
});

const newTemples = temples.filter((temple) => {
    year = temple.dedicated.split(', ')[0];
    if (year > 2000) return year;
});

const largeTemples = temples.filter((temple) => {
    if (temple.area > 90000) return temple.area;
});

const smallTemples = temples.filter((temple) => {
    if (temple.area < 10000) return temple.area;
});

homeBtn.addEventListener('click', () => {
    createTempleCards(temples);
    pageTitle.textContent = 'Home';
})

oldBtn.addEventListener('click', () => {
    createTempleCards(oldTemples);
    pageTitle.textContent = 'Old Temples';
})

newBtn.addEventListener('click', () => {
    createTempleCards(newTemples);
    pageTitle.textContent = 'New Temples';
})

largeBtn.addEventListener('click', () => {
    createTempleCards(largeTemples);
    pageTitle.textContent = 'Large Temples';
})

smallBtn.addEventListener('click', () => {
    createTempleCards(smallTemples);
    pageTitle.textContent = 'Small Temples';
})