let currentIndex = 0;

async function fetchRandomImage() {
    const response = await fetch('https://picsum.photos/800/600/?random');
    return response.url;
}

async function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const imageUrl = await fetchRandomImage();
    slides[currentIndex].innerHTML = `<img src="${imageUrl}" alt="Random Image">`;

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initial slide
showSlide(currentIndex);

// Auto slide (uncomment the line below to enable auto slide)
// setInterval(nextSlide, 3000);
