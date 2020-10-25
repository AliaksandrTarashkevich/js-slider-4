let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.querySelector('.slides-dots'),
    slides = document.querySelectorAll('.slides-item'),
    prevBtn = document.getElementById('btn-prev'),
    nextBtn = document.getElementById('btn-next'),
    slideIndex = 1;

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length ; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length ; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function() {
    changeSlide(-1);
}
nextBtn.onclick = function() {
    changeSlide(1);
}

dotsArea.onclick = function(e) {
    for (let i = 0 ; i < dots.length + 1; i++) {
        if(e.target.classList.contains('dots-item') && e.target === dots[i - 1]){
            currentSlide(i);
        }
    }
}

showSlides(slideIndex);