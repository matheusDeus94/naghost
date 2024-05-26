let numberOfTexts = 6;
let actualText = 1;

let currentSlide = 1;
let lastSlide = 27;

let textPreviousButtonAbout = document.getElementById('about-previous-button');
let textNextButtonAbout = document.getElementById('about-next-button');

let slideShowVar = document.getElementsByClassName('image-art-slide-show');

let dots = document.getElementsByClassName('dot');

function removeFade() {
    slideShowVar[0].classList.remove('fade');
}

function slideShow() {
    if(currentSlide == lastSlide) {
        currentSlide = 1;
        slideShowVar[0].src = './images/image-' + currentSlide + '.jpg';
        slideShowVar[0].classList.add('fade');
        setTimeout(removeFade,500);
        setTimeout(slideShow,1500)
    } else {
        currentSlide++;
        slideShowVar[0].src = './images/image-' + currentSlide + '.jpg';
        slideShowVar[0].classList.add('fade');
        setTimeout(removeFade,500);
        setTimeout(slideShow, 1500);
    }
}

function nextText() {
    if(actualText == numberOfTexts) {
        actualText = 1;
    } else {
        actualText++;
    }
}

function previousText() {
    if(actualText == 1) {
        actualText = numberOfTexts;
    } else {
        actualText--;
    }
}

slideShow();

textNextButtonAbout.addEventListener('click', function(ev) {
    document.getElementById('about-text-paragraph-' + actualText).style.display = 'none';
    document.getElementById('dot-' + actualText).classList.remove('active');
    nextText();
    document.getElementById('about-text-paragraph-' + actualText).style.display = 'block';
    document.getElementById('dot-' + actualText).classList.add('active');
});

textPreviousButtonAbout.addEventListener('click', function(ev) {
    document.getElementById('about-text-paragraph-' + actualText).style.display = 'none';
    document.getElementById('dot-' + actualText).classList.remove('active');
    previousText();
    document.getElementById('about-text-paragraph-' + actualText).style.display = 'block';
    document.getElementById('dot-' + actualText).classList.add('active');
});
