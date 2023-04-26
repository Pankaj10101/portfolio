const projectbtn = document.querySelector("#projectsbtn")
const skillsbtn= document.querySelector("#skillsbtn")

const projects_container = document.querySelector("#projects")
const skills_container = document.querySelector("#skills")

const mode = document.querySelector('.mode')
const body = document.querySelector("body")

projectbtn.addEventListener("click", ()=>{
    skills_container.classList.add('non_active')
    projects_container.classList.remove('non_active')
    projectbtn.classList.add('filter_tab-active')
    skillsbtn.classList.remove('filter_tab-active')
})

skillsbtn.addEventListener("click", ()=>{
    projects_container.classList.add('non_active')
    skills_container.classList.remove('non_active')
    projectbtn.classList.remove('filter_tab-active')
    skillsbtn.classList.add('filter_tab-active')
})

mode.addEventListener('click', (e)=>{
     if(e.target.classList.contains("dark")){
        localStorage.setItem('state', 'dark')
        body.classList.add('dark-theme')
         mode.innerHTML = '<img class="light" src="./icons/sun-line.svg" alt="" />'
     }else if(e.target.classList.contains("light")){
        body.classList.remove('dark-theme')
        localStorage.setItem('state', 'light')
        mode.innerHTML = '<img class="dark" src="./icons/moon-line.svg" alt="" />'

     }
})

window.addEventListener('DOMContentLoaded', ()=>{
    let state = localStorage.getItem("state")
    if(state=='dark'){
        body.classList.add('dark-theme')
        mode.innerHTML = '<img class="light" src="./icons/sun-line.svg" alt="" />'


    }else{
        body.classList.remove('dark-theme')
        mode.innerHTML = '<img class="dark" src="./icons/moon-line.svg" alt="" />'

    }

})