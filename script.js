"use strict"
let header = document.querySelector(".header");

document.querySelector("#menu-btn").onclick = () => {
  header.classList.toggle("active");
};

window.onscroll = () => {
  header.classList.remove("active");
};

let home = document.querySelector(".home");
let text1 = home.querySelector(".text1");
let text2 = home.querySelector(".text2");

home.onmousemove = (e) => {
  var x = (window.innerWidth / 2 - e.pageX) / 10;
  var y = (window.innerHeight / 2 - e.pageY) / 10;
  text1.style.margin = `${y}px ${x}px`;
  text2.style.margin = `${y}px ${x}px`;
};
home.onmouseleave = (e) => {
  text1.style.margin = `0`;
  text2.style.margin = `0`;
};

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    console.log(inputNumber.value);
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});

function createSnow() {
  let snowFall = document.querySelector(".snowfall");
  let span = document.createElement("span");
  let size = Math.random() * 10;
  span.style.left = (Math.random() * window.innerWidth) + "px";
  span.style.height = 10 + size + "px";
  span.style.width = 10 + size + "px";
  snowFall.appendChild(span)
  setTimeout(()=>{
      span.remove()
  },5000)
}

if(window.innerWidth<768){
  setInterval(createSnow,300)
}
else{
  setInterval(createSnow,100)
}