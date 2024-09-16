// Function to load external HTML files into containers
function loadSliderContent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error("Error loading slider: ", error));
}

// Load each slider
loadSliderContent('news.html', 'slider-news-container');
loadSliderContent('header.html', 'header-container');
loadSliderContent('footer.html', 'footer-container');
// Initialize Swiper
setTimeout(() => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}, 1000); // Delay to ensure sliders are loaded
