// active navbar
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("scroll-on");
//     }
//     else {
//         nav.classList.remove("scroll-on");
//     }
// }

// nav hide on click

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
    })
})

// counter code

document.addEventListener("DOMContentLoaded", function () {
    function Counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1;
    
      let step = Math.abs(Math.floor(duration / range));
      if (step === 0) {
        step = 1;
      }
  
      let timer = setInterval(() => {
        current = current + increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }
  
    Counter("count1", 0, 100, 2500);
    Counter("count2", 0, 200, 1000);
    Counter("count3", 50, 100, 2500);
    Counter("count4", 10, 50, 1000);
  });
  

