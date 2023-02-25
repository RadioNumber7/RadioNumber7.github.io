const myImages = [
    {
        src: "/images/atomic-heart-HD-scaled",
        description: "This is the main charater P-3.",
        alt: "Atomic Heart"
    },
    {
        src: "/images/ATOMIC-_HEART_Store_Featured_JPG-af8c6994d37e4bfb590d",
        description: "This is the main character and the robotic twin right",
        alt: "Atomic heart"
    },
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

showcaseImageElement.src = myImages[currentIndex].src
showcaseImageElement.alt = myImages[currentIndex].alt
showcaseImageDescription.innerText = myImages[currentIndex].description

function changeMyImage(e){
    if (e.target.id === nextButton.id) {
        if (currentIndex < myImages.length -1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        } 
    }   
    if (e.target.id === prevButton.id) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = myImages.length - 1
        }
    }
    
    showcaseImageElement.src = myImages[currentIndex].src
    showcaseImageElement.alt = myImages[currentIndex].alt
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;