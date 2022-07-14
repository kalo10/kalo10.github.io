window.onload = function () {
    var min = 25;
      var sec = 00;
      var elemMin = document.getElementById("min");
      var elemSec = document.getElementById("sec");
      var bStart = document.getElementById("play-button");
      var bReset = document.getElementById("reset-button");
      var bRestart = document.getElementById("restart");
    var s_plus = document.getElementById("session-plus");
    var s_minus = document.getElementById("session-minus");
    var b_plus = document.getElementById("break-plus");
    var b_minus = document.getElementById("break-minus");
    
    var session = document.getElementById("session-length");
    var break_ = document.getElementById("break-length");
    
      var Interval;
    var status = 0;
    var breakStatus = 0;
    var sessionStatus = 1;
    var sessionLength = 25;
    var breakLength = 5;
    
    bStart.onclick = function() {
         clearInterval(Interval);
          if(status == 0){
            status = 1;
             Interval = setInterval(timer, 1000);
          }
      else {
        status = 0;
      }
    }   
    
    bReset.onclick = function() {
      clearInterval(Interval);
      elemSec.innerHTML = "00";
      elemMin.innerHTML = "25";
      sec = 00;
      min = 25;
      status = 0;
      sessionLength = 25;
      session.innerHTML = "25";
      break_.innerHTML = "05";
      breakLength = 5;
    }
    
    s_plus.onclick = function() {
      if(status == 0){
        sessionLength++ ;
        min = sessionLength;
        if (sessionLength > 9){
          session.innerHTML = sessionLength;
        }
        else{
          session.innerHTML = "0" + sessionLength;
        }
        elemMin.innerHTML = session.innerHTML;
      }
    }
    
    b_plus.onclick = function() {
      if(status == 0){
       breakLength++ ;
        if (breakLength > 9){
          break_.innerHTML = breakLength;
        }
        else{
          break_.innerHTML = "0" + breakLength;
        }
      }
    }
    
    b_minus.onclick = function() {
      if(status == 0){
       breakLength-- ;
        if (breakLength > 9){
          break_.innerHTML = breakLength;
        }
        
        else if (breakLength < 0){
          breakLength = 0;
        }
        else{
          break_.innerHTML = "0" + breakLength;
        }
      }
    }
    
    s_minus.onclick = function() {
      if(status == 0){
        sessionLength-- ;
        min = sessionLength;
        if (sessionLength > 9){ 
          session.innerHTML = sessionLength;
        }
        
        else if (sessionLength < 0){
          sessionLength = 0;
        }
        
        else{
          session.innerHTML = "0" + sessionLength;
        }
        elemMin.innerHTML = session.innerHTML;
      }
    }
    
    function addColor(color){
     var v = document.getElementById("time-display")
     if(color == "yellow")
       v.className += "yellow-text";
      else  
        v.className += "red-text";
  }
  
    
    
    function timer () {
      sec--;
      if(sec > 9){
        elemSec.innerHTML = sec;
      }
      
      if(sec < 0){
        elemSec.innerHTML = "59";
        sec = 59;
        min--;
      }
      
      if(sec <= 9){
        elemSec.innerHTML = "0" + sec;
      }
      
      
   
      if(min == 0 && sec == 0){
        if(breakStatus == 1){
          min = sessionLength;
          breakStatus = 0;
          addColor("red");
        }
        else{
          min = breakLength;
          breakStatus = 1;
          addColor("yellow");
        }
      }
      
       if(min > 9){
        elemMin.innerHTML = min;
      }
      
        if(min <= 9){
           elemMin.innerHTML = "0" + min;
        }
    }
  }
  
  
  
  
  