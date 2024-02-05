// const E1time = document.getElementById("timer");
// const E1startButton= document.getElementById("start");
// const E1stopButton= document.getElementById("Stop");
// const E1resetButton= document.getElementById("reset");

// window.onload = function(){

// let  startTime = 0;
// let  elapsedTime = 0;
// let  TimerInterval;

// function StartTimer(){
//     startTime = Date.now()
// }

// function StopTimer(){
   
// }

// function ResetTimer(){
   
// }
// }

// E1startButton.addEventListener("click", StartTimer)
// E1stopButton.addEventListener("click", StopTimer)
// E1resetButton.addEventListener("click", ResetTimer)



const display = document.getElementById("display");
let timer  = null;
let startTime =0 ;
let elapsedTime  =0 ;
let isRunning  =false ;


function StartTimer(){
       if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(Update, 10);
        isRunning=true;
       }
      //  const currentTime= Date.now();
      //  console.log(currentTime);
    }
    
    function StopTimer(){
       if(isRunning){
         clearInterval(timer);
         elapsedTime=Date.now() - startTime;
         isRunning=false;
       }


    }
    
    function ResetTimer(){

clearInterval(timer);
       timer  = null;
       startTime =0 ;
       elapsedTime  =0 ;
       isRunning  =false ;  
       display.textContent="00:00:00"
    }

    function Update(){
       const currentTime= Date.now();
       elapsedTime = currentTime -startTime;
     
       let hours = Math.floor(elapsedTime/  (1000 * 60 * 60));
       let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
       let seconds = Math.floor(elapsedTime/1000 %60);

       hours = String(hours).padStart(2, "0");
        minutes = String( minutes).padStart(2, "0");
       seconds = String(seconds).padStart(2, "0");

       display.textContent = `${hours}:${minutes}:${seconds}`;

    }