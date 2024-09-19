let cursor=document.querySelector('#cursor')
document.addEventListener("mousemove",function(dets){
    cursor.style.left= dets.x+"px";
    cursor.style.top= dets.y+"px"
})

let sections=document.querySelectorAll('.scroll')
let navLinks=document.querySelectorAll('nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-500;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
    })
}