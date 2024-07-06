//PRELOADER
const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function (){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

//FAQ
let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("open");
    })
});

//Scroll effect
window.addEventListener("scroll", reveal);

function reveal(){
  let reveals = document.querySelectorAll(".reveal");
    for(let i = 0; i < reveals.length; i++){
      
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 70;

      if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add("active");
      }else{
          reveals[i].classList.remove("active");
      }
  }
};