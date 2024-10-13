const croix=document.querySelector(".sideBar .sideTitle .circle");
const flesh=document.querySelector(".sideBar .sideTitle .flesh");
const side=document.querySelector(".sideBar");
const sideh1=document.querySelector(".sideBar h1");
const arrSpan=document.querySelectorAll(".sideItem ul li a span");
const arrli=document.querySelectorAll(".sideItem ul li");
const nav=document.querySelector(".nav");
croix.addEventListener("click",()=>{
    side.style.width="75px";
    croix.style.display="none";
    flesh.style.display="block";
    sideh1.style.display="none";
    arrSpan[0].style.display="none";
    arrSpan[1].style.display="none";

    arrli[0].style.width="45px";
    arrli[1].style.width="45px";
    nav.style.width="calc(100vw - 100px)";
    
});
flesh.addEventListener("click",()=>{
    side.style.width="300px";
    flesh.style.display="none";
    croix.style.display="block";
    sideh1.style.display="block";
    arrSpan[0].style.display="block";
    arrSpan[1].style.display="block";
    arrli[0].style.width="auto";
    arrli[1].style.width="auto";
    nav.style.width="calc(100vw - 325px)";

});
arrli[0].addEventListener("click",()=>{
    arrli[0].classList.add('active');
    arrli[1].classList.remove('active');
});
arrli[1].addEventListener("click",()=>{
    arrli[1].classList.add('active');
    arrli[0].classList.remove('active');
});