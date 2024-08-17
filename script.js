let hours=0;
let min=0;
let sec=0;
let getHours=document.querySelector(".hours");
let getMin=document.querySelector(".min");
let getSec=document.querySelector(".sec");
let btnStart=document.querySelector(".btnStart");
let btnStop=document.querySelector(".btnStop");
let btnReset=document.querySelector(".btnReset");
let interval;

btnStart.addEventListener('click',()=>{
    interval=setInterval(startTimer,1000)
})
btnStop.addEventListener('click',()=>{
clearInterval(interval);
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    sec='0' + 0;
    min='0'+ 0;
    hours='0'+ 0;
    getSec.innerHTML=sec;
    getMin.innerHTML=min;
    getHours.innerHTML=hours;

})

function startTimer(){
    sec++;
    if(sec<=9){
        getSec.innerHTML='0'+ sec;
    }
    if(sec>9){
        getSec.innerHTML=sec;
    }
    if(sec>59){
        min++;
        getMin.innerHTML='0'+ min;
        sec=0;
        getsec.innerHTML='0'+ 0;
    }
    if(min>9){
        getMin.innerHTML=min;
    }
    if(min>59){
        hours++;
        getHours.innerHTML='0'+ hours;
        min=0;
        sec=0;
        getMin.innerHTML='0'+ 0;
        getSec.innerHTML='0'+ 0;
    }
    if(hours>9){
getHours.innerHTML=hours;
    }
}
