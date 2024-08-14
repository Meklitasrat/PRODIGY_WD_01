

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}


document.addEventListener('mousemove' , move);

function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        const  x= (window.innerWidth - e.pageX*speed)/120
        const  y= (window.innerWidth - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        
    })
}

var icon = document.getElementById('icon')

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.className = "fa-solid fa-sun"
        
    }else{
        icon.className = "fa-solid fa-moon"
        
    }
}



gsap.from('.logo', {opacity: 0, duration: 1, delay: 2, y:10})
gsap.from('.navbar , nav_item', {opacity: 0, duration: 1, delay: 2.1, y:30 , stagger: 0.2})

gsap.from('.title', {opacity: 0, duration: 1, delay: 1.6, y:10})
gsap.from('.conta-wrapper', {opacity: 0, duration: 1, delay: 1.6, y:10})
gsap.from('.mi2', {opacity: 0, duration: 1, delay: 1.6, y:10})
gsap.from('.desc', {opacity: 0, duration: 1, delay: 1.8, y:10})
gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:10})
gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:10})
