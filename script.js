let openMenu = document.getElementById('menu');
let closeMenu = document.getElementById('close');
let asideNav = document.getElementById('aside');
let projects = document.getElementById('my-projects');

openMenu.addEventListener('click', ()=>{
    asideNav.style.right = '0';
})

closeMenu.addEventListener('click', ()=>{
    asideNav.style.right = '-200px';
})

projects.addEventListener('click', ()=>{
    asideNav.style.right = '-200px';
})