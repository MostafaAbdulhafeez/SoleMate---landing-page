const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen?"fa-solid fa-x":"fa-solid fa-bars")
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","fa-solid fa-bars")
});

const scrollReveal={
    distance:"50px",
    origin:"bottom",
    transition:1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollReveal,
    origin:"left"
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollReveal,
delay:500,
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollReveal,
delay:1000,
});
ScrollReveal().reveal(".header_content p",{
    ...scrollReveal,
delay:1500,
});
ScrollReveal().reveal(".header_content div",{
    ...scrollReveal,
delay:1500,
});



// Check for saved mode in localStorage
// const currentMode = localStorage.getItem('mode') || 'light-mode';
// body.classList.add(currentMode);

