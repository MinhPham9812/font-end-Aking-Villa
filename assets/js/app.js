// Function to load external HTML files into containers

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
