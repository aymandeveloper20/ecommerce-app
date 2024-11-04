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
