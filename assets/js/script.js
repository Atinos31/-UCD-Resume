
//main button
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach(btn =>{
    let ripple;

btn.addEventListener('mouseenter',(e)=>{
    const left = e.clientX - e.target.getBoundingClientRect
    ().left;
    const top = e.clientY - e.target.getBoundingClientRect
    ().top;
    
    ripple = document.createElement('div')
    ripple.classList.add('ripple')
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
});

btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple)
});
})



//slideshow
const slideshow = document.querySelector(".slideshow");

setInterval(() => {
    const firstIcon = slideshow.firstElementChild;

    firstIcon.classList.add("faded-out");
    
    const thirdIcon = slideshow.children[3];

    thirdIcon.classList.add("light");

    thirdIcon.previousElementSibling.classList.remove("light");


    setTimeout(() => {   
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    
    setTimeout(() =>{
    firstIcon.classList.remove("faded-out");
    }, 500);
    }, 500);
}, 3000)
// end of slideshow
// end of section 5