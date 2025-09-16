const windChill = document.getElementById('wind-chill');

let temp = 10;
let speed = 5;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

const windChillFactor = Math.round(calculateWindChill(temp, speed) * 10) / 10;

if (temp <= 10 && speed > 4.8) {
    windChill.textContent = `${windChillFactor}°C`;
} else {
    windChill.textContent = 'N/A';
}