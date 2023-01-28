///start scroller bar/////
let el = document.querySelector(".scroller");


window.addEventListener("scroll",()=>{
  let scrollTop =document.documentElement.scrollTop ;
  let h =document.documentElement.scrollHeight - document.documentElement.clientHeight ;
  el.style.width = `${(scrollTop / h ) * 100}%`

})

///end scroller bar/////
///start  currency exchanger/////
fetch("https://api.fastforex.io/fetch-all?api_key=c10d83a966-d4adbd0e2d-rp7ewb").then((results)=>{
return (results.json()) ;
}).then((currency)=>{
  console.log(currency)
  let amount1 =document.querySelector(".amount1") ;
  let amountEGP1 =document.querySelector(".egp1 span") ;
  let amountSAR1 =document.querySelector(".sar1 span") ;
  amountEGP1.innerHTML= (amount1.innerHTML * currency.results["EGP"]).toFixed(2);
  amountSAR1.innerHTML= (amount1.innerHTML * currency.results["SAR"]).toFixed(2);
  let amount2 =document.querySelector(".amount2") ;
  let amountEGP2 =document.querySelector(".egp2 span") ;
  let amountSAR2 =document.querySelector(".sar2 span") ;
  amountEGP2.innerHTML= (amount2.innerHTML * currency.results["EGP"]).toFixed(2);
  amountSAR2.innerHTML= (amount2.innerHTML * currency.results["SAR"]).toFixed(2);
})
///end currency exchanger/////