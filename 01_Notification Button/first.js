const button=document.querySelector("button");
const notification=document.querySelector(".notification");
let count=0;
button.addEventListener("click",()=>{
    count++;
    notification.innerText=count;
    notification.style.display="inline-block";
})