const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs div");
const opacity = 0.5;
let count = 1;
let start = true
thumbs[0].classList.add("active")
thumbs.forEach(div => div.addEventListener("click", imgActivate))
thumbs.forEach(div => {
  div.addEventListener("click",()=>{
    if(div.getAttribute('id') === "thumbs1"){
      count = 1
    }else if(div.getAttribute('id') === "thumbs2"){
      count = 2
    }else if(div.getAttribute('id') === "thumbs3"){
      count = 3
    }else{
      thumbs.classList.remove('active')
    }
  })
})

function imgActivate(e) {
  clearInterval(mySlide)
  thumbs.forEach(div => (div.classList.remove("active")));
  e.target.classList.add("active")
  current.src = e.target.getAttribute("data-src");
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  setTimeout(()=> thumbs.forEach(div => (div.classList.remove("active"))),5000)
  setTimeout(() => mySlide = setInterval(autoPlay,5000),0); 
}

  function autoPlay() {
    if(count < thumbs.length){
      count++
    }else{
      count=1
    }   
   let isthumbs = document.querySelector("#thumbs"+(count)+"");
   thumbs.forEach(div => (div.classList.remove("active")));
    isthumbs.classList.add("active")
    current.src = "assets/images/slide"+(count)+".png"
    current.classList.add("fade-in");
    setTimeout(() => current.classList.remove("fade-in"), 500);   

  }

  let mySlide = setInterval(autoPlay,5000)
  
