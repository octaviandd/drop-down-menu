var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links')
var links = document.querySelectorAll('.nav-links > ul > li')


const moveNavbar = () =>{
    burger.addEventListener('click', ()=>{  
        nav.classList.toggle('navbar-on')
    
        links.forEach((li ,index)=>{
            if(li.style.animation){
                li.style.animation = ''
            }else{
                li.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
            }      
        })
    })


    
}


moveNavbar();