let view = document.querySelector("#changer");
let wrapper = document.querySelector(".toggle");
let nav=document.querySelectorAll(".link");
let logo=document.querySelector(".logo")
let navbar=document.querySelector(".navv");
let body=document.querySelector("body");

 


wrapper.addEventListener("click", () => {
    if (view.src.includes("sun.svg")) {
        view.src = "/assets/moon.png";
     body.style.backgroundColor="black";
     console.log(navbar);
     
     body.style.color="white";
     logo.style.color="white";
     for(n of nav){
         n.style.color="white";
     }
    } else {
        view.src = "/assets/sun.svg";
         body.style.backgroundColor="white";
     body.style.color="black";
     
     logo.style.color="black";
     for(n of nav){
         n.style.color="black";
     }
    }
});



  window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.style.opacity = "0";
      preloader.style.display = "none";
      preloader.style.transition = "all 0.5s ease"; 
    }, 1000);
  });


let hidden_elements = document.querySelectorAll(".hidden");

setTimeout(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hide'); 

      } else {
        entry.target.classList.remove('show'); 
        entry.target.classList.add('hide'); 

      }
    });
  });

  hidden_elements.forEach((el) => observer.observe(el));
}, 1000);

// ----------------------special cards-------------------------
let cards = document.querySelectorAll(".special1");
setTimeout(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target);
      if (entry.isIntersecting) {
       setTimeout(()=>{
        entry.target.classList.add('showw');
        entry.target.classList.remove('hidee'); 
        },500);

      } else {
        entry.target.classList.remove('showw'); 
        entry.target.classList.add('hidee'); 

      }
    });
  });

  cards.forEach((el) => observer.observe(el));
}, 2000);

let card = document.querySelectorAll(".special2");
setTimeout(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target);
        
      if (entry.isIntersecting) {
        setTimeout(()=>{
        entry.target.classList.add('showw');
        entry.target.classList.remove('hidee'); 
        },1000);

      } else {
        entry.target.classList.remove('showw'); 
        entry.target.classList.add('hidee'); 

      }
    });
  });

  card.forEach((el) => observer.observe(el));
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
  // === Theme Elements ===
 

  // === Step 1: Apply Saved Theme on Page Load ===
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    applyDarkMode();
    
  } else {
    applyLightMode();
  
    
  }

  // === Step 2: Toggle Theme on Click ===
  wrapper.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      applyDarkMode();
      localStorage.setItem("theme", "dark");
    } else {
      applyLightMode();
      localStorage.setItem("theme", "light");
    }
  });

  // === Functions for Applying Themes ===
  function applyDarkMode() {
    view.src = "/assets/moon.png";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    logo.style.color = "white";
    nav.forEach(n => n.style.color = "white");
    view.style.transform="translateX(25px)";
  }

  function applyLightMode() {
    view.src = "/assets/sun.svg";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    logo.style.color = "black";
    nav.forEach(n => n.style.color = "black");
    view.style.transform="translateX(0px)";

  }
});

