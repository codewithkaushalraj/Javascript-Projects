let board=document.querySelector(".board")
let btn=document.querySelector("button")
let timer=document.querySelector(".timer")
let points=document.querySelector(".points")
let t=document.querySelector(".timeCalc")
let overlay=document.querySelector("#overlay")

let box=document.createElement('div')
box.classList.add('box')
// board.append(div)

let time=0
let score=0;
let Interval;

// let box=document.querySelector(".box")
const randomColor=()=>{
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    return {r,g,b}
}
const randomBox=()=>{
    // clearInterval(Interval)
    btn.disabled = true;
    box.style.display='inline-block'
    board.append(box)
    let boardHeight=board.clientHeight-box.offsetHeight
    let boardWidth=board.clientWidth - box.offsetWidth;
    Interval= setInterval(()=>{

        let {r,g,b}=randomColor();
    // let x=Math.floor(Math.random()*100);
    // let y=Math.floor(Math.random()*100)
    let x=Math.random()*boardWidth;
    let y=Math.random()*boardHeight

    box.style.left=`${x}px`
    box.style.top=`${y}px`
    // box.style.left=`${x}%`
    // box.style.top=`${y}%`
    box.style.backgroundColor=`rgb(${r},${g},${b})`
    
    t.innerHTML=`Timer - ${++time}`
    },1300)
}
// let time=0
// let Interval;
btn.addEventListener('click',()=>{
    randomBox()
    // After 10 Sec this will help to stop the setInterval
    setTimeout(()=>{
        clearInterval(Interval)
        time=0
        score=0
        overlay.style.display="flex"
    },13000)
    setTimeout(()=>{
        t.innerHTML=`Timer - ${0}`
        points.innerHTML=`Score - ${0}`
        overlay.style.display="none"
        box.style.display='none'
        btn.disabled = false;
    },16500)
})
let x=0,y=0;
box.addEventListener('click',(e)=>{
    // This will help to prevent multiple click score increase 
    if(x!=e.clientX && y!=e.clientY){
        score+=1;
        x=e.clientX
        y=e.clientY
    }
    points.innerHTML=`Score - ${score}`
})