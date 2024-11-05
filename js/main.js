let mobileMenu = document.querySelector('.mobile-menu');
let burgerMenu = document.querySelector('.burger-menu');
let activated = false;
    burgerMenu.addEventListener('click', () => {
    if(!activated){
        mobileMenu.classList.toggle('activated');
        burgerMenu.classList.remove("fa-bars");
        burgerMenu.classList.add("fa-x");
        activated = true;

    }else{
        mobileMenu.classList.toggle('activated');
        burgerMenu.classList.add("fa-bars");
        burgerMenu.classList.remove("fa-x");
        activated = false;
    }
});

// JavaScript to manage dot navigation for mobile
const productSection = document.getElementById('productSection');
const dots = document.querySelectorAll('.dot');

productSection.addEventListener('scroll', () => {
    const scrollLeft = productSection.scrollLeft;
    const cardWidth = productSection.clientWidth;

    const activeIndex = Math.round(scrollLeft / cardWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
});