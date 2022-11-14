window.addEventListener("DOMContentLoaded",function(){
    const stopwatch = document.getElementById("stopwatch");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");
   
    let startTimer = null;
    let[hours,minutes,seconds] =[0,0,0];
    function disabled(...elems){
        elems.forEach((elem)=>elem.setAttribute("disabled","true"));

    }
    function undisabled(...elems)
    {
        elems.forEach((elem)=>elem.removeAttribute("disabled"));

    }
    function displayTime()
    {
        seconds++;
        if(seconds>=60){
            minutes ++;
            seconds = 0;

            if(minutes>=60){
                hours ++;
                minutes = 0;

            if(hours>=24){
                hours=0;
            
            }    
        }
    }

    }
})