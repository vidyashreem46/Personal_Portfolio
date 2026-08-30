const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{topBtn.classList.toggle('show',window.scrollY>500)});
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';observer.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll('.project,.skill-column,.facts div,.edu-main').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .7s ease, transform .7s ease';observer.observe(el)});
