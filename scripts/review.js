const reviewCounter = document.getElementById('review-counter');

let count = localStorage.getItem('reviewsCount') || 0;

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === '/review.html') {
        count++;
        localStorage.setItem('reviewsCount', count);

        const p = document.createElement('p');
        p.textContent = `Reviews Completed: ${count}`;
        reviewCounter.appendChild(p);
    }
})