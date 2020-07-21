const hamburger= document.querySelector('.hamburger');
const navLinks= document.querySelector('.nav-links');
const links= document.querySelector('.nav-links li');
const mainSection= document.querySelector('.main-section');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    mainSection.classList.toggle('hide');
})

const slide= document.querySelectorAll('.slide');
const intervalTime= 5000;
let auto=true;
let slideInterval;

const nextSlide= () => {
    const current= document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        slide[0].classList.add('current');
    }
}

const prevSlide= () => {
    const current= document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        slide[slide.length-1].classList.add('current');
    }
}

if(auto){
    slideInterval= setInterval(nextSlide, intervalTime);
}