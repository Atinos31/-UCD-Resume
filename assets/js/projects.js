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

// projects
const container1 = document.querySelector('.container1');
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn");

projects.forEach((project, i) => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${project.
        firstElementChild.offsetHeight - project.
        offsetHeight + 20}px`;

    });

    project.addEventListener("mouseleave", () => {
        project.firstElementChild.style.top = '2rem';

    });

    // Big project image
    project.addEventListener("click", () => {
        const bigImgWrapper = document.createElement('div');
        bigImgWrapper.className ="project-img-wrapper";
        container1.appendChild(bigImgWrapper);

        const bigImg = document.createElement("img");
        bigImg.className = "project-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        bigImg.setAttribute("src", `${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
        document.body.style.overflowY = "hidden";

        projectHideBtn.classList.add("change");

        projectHideBtn.onclick = () => {
            projectHideBtn.classList.remove("change");
            bigImgWrapper.remove();
            document.body.style.overflowY = "scroll";
        };
    });
    // end of  Big project image

    i >= 6 && (project.style.cssText ="display:none; opacity:0");    
});

// projects button
const section3 = document.querySelector(".section-3");
const projectsBtn = document.querySelector(".projects-btn");
const projectsBtnText = document.querySelector(".projects-btn span");
let showHideBool = true

const showProjects = (project, i) => {
    setTimeout(() =>{
                project.style.display = "flex";
                section3.scrollIntoView({block:"end"});
            }, 600);
    setTimeout(() => {
                project.style.opacity = "1";
               },i * 200);

}

const hideProjects = (project, i) => {
    setTimeout(() =>{
                project.style.display = "none";
                section3.scrollIntoView({block:"end"});
            }, 1200);
    setTimeout(() => {
                project.style.opacity = "0";
                },i * 100);

}

projectsBtn.addEventListener("click",(e) => {
    e.preventDefault();

    projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

    showHideBool
    ? (projectsBtnText.textContent = "Show Less" )
    :(projectsBtnText.textContent = "Show More");

    projects.forEach((project, i) => {
        i >=6 &&(showHideBool ? showProjects(project, i):
                hideProjects(project, i))
    });
    showHideBool =!showHideBool;
});
//  end of projects button
//  end of projects