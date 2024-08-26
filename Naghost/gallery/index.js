let numberOfPics = 6;
let actualPic = 1;

let backButton = document.getElementById('back-button-gallery');
let nextButton = document.getElementById('next-button-gallery');

let image = document.getElementById('image-gallery-img')

function nextPic() {
    if(actualPic == numberOfPics) {
        actualPic = 1;
    } else {
        actualPic++;
    }
//    return actualPic;
}

function backPic() {
    if(actualPic == 1){
        actualPic = numberOfPics;
    } else {
        actualPic--;
    }
//    return actualPic;
}


function removeFade() {
    image.classList.remove('fade');
}

nextButton.addEventListener('click', function(ev){
    nextPic();
    image.src="../media/gallery/image-" + actualPic + ".jpg";
    image.classList.add('fade');
    setTimeout(removeFade,500);
});

backButton.addEventListener('click', function(ev){
    backPic();
    image.src="../media/gallery/image-" + actualPic + ".jpg";
    image.classList.add('fade');
    setTimeout(removeFade,500);
});
