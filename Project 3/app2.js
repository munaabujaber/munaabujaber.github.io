/* Code for Carousel images */
const carouselslide = document.querySelector('.carousel-slide');
const carouselimages = document.querySelectorAll('.carousel-slide img');

const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

let counter = 1;
const size = carouselimages[0].clientWidth;

carouselslide.style.transform = 'translateX('+(-size*counter)+'px)';


nextbtn.addEventListener('click', ()=> {
    if(counter >= carouselimages.length - 1) return;
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselslide.style.transform = 'translateX('+(-size*counter)+'px)';
});

prevbtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselslide.style.transform = 'translateX('+(-size*counter)+'px)';
});

carouselslide.addEventListener('transitionend', ()=>{
    if(carouselimages[counter].id === 'last-clone') {
        carouselslide.style.transition = "none";
        counter = carouselimages.length - 2;
        carouselslide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
    if(carouselimages[counter].id === 'first-clone') {
        carouselslide.style.transition = "none";
        counter = carouselimages.length - counter;
        carouselslide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
})



