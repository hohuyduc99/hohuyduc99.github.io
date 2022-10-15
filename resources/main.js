let plate = document.getElementById('plate');

let lightenColor = (event) => {
    event.target.style.backgroundColor = '#afdae2';
}

plate.addEventListener('mouseover', lightenColor);