///start scroller bar/////
let el = document.querySelector(".scroller");


window.addEventListener("scroll",()=>{
  let scrollTop =document.documentElement.scrollTop ;
  let h =document.documentElement.scrollHeight - document.documentElement.clientHeight ;
  el.style.width = `${(scrollTop / h ) * 100}%`

})

///end scroller bar/////