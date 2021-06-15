
const navTriggerEl=document.querySelector(".hamburger");
const contentEl=document.querySelector(".content");
const navEl=document.querySelector("nav");
const hamburgerBarEl=document.getElementsByTagName("span");

function toggleNav(){
  navTriggerEl.addEventListener("click",function(){
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburgers();
  });
}

function animateHamburgers(){
  for(let item of hamburgerBarEl){
  item.classList.toggle("change");
  }
}

toggleNav();