let header = document.querySelector(".header");

document.querySelector("#menu-btn").onclick = () => {
  header.classList.toggle("active");
};

window.onscroll=()=>{
  header.classList.remove('active')
}


let home=document.querySelector('.home')
let text1=home.querySelector('.text1')
let text2=home.querySelector('.text2')

home.onmousemove=(e)=>{
  var x=((window.innerWidth)/2-e.pageX)/10
  var y=((window.innerHeight)/2-e.pageY)/10
  text1.style.margin=`${y}px ${x}px`
  text2.style.margin=`${y}px ${x}px`
  
}
home.onmouseleave=(e)=>{
  text1.style.margin=`0`
  text2.style.margin=`0`
  
}