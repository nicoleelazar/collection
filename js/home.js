const year = document.getElementById('year');


// Update footer year
function updateYear() {
    year.innerHTML = `${new Date().getFullYear()} `;
}
updateYear();