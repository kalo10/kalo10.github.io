window.onload = function(){
    var colours = ["dodgerblue", "green", "orange", "purple"];
    
  
    function rotate(arr){
      var removed_element = arr.pop(3, 4);
      arr.unshift(removed_element);
      return arr;
    }
     
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    
    var victory = document.getElementById("victory");
    
    var scoreBoard = document.getElementById("score");
    var score = 0;
      box1.className = colours[0];
      box2.className = colours[1];
      box3.className = colours[2];
      box4.className = colours[3];
  
    
    var whiteBox = document.getElementById("white");
    
    var ball = document.getElementById("ball");
    ball.className = "green";
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    
    whiteBox.onclick = function(){
      colours = rotate(colours);
      box1.className = colours[0];
      box2.className = colours[1];
      box3.className = colours[2];
      box4.className = colours[3];
    }
    
    var yourVar;
    
    function checkWin(){
      var ballColor = ball.className.split(" ");
      if(box1.className != ballColor[1]){
        victory.innerHTML = "YOU LOSE";
        clearInterval(yourVar);
      }
      else{
        score++;
        scoreBoard.innerHTML = score;
      } 
    }
    
    start.onclick = function(){
      score = 0;
      scoreBoard.innerHTML = "0";
      victory.innerHTML = "";
      yourVar = setInterval( function(){
        ball.className = "ball-anim " + colours[Math.floor(Math.random() * 4)];
        var myVar = setTimeout(function(){
         var newVar = setTimeout( function(){
     ball.className = "";
  }, 200);
          checkWin();
        }, 1100);
      }, 1500);      
    } 
     
    stop.onclick = function(){
      clearInterval(yourVar);
      score = 0;
      scoreBoard.innerHTML = "0";
      victory.innerHTML = "";
    }
  }
  
  var newVar = setTimeout( function(){
     ball.className = "";
  }, 1300);
  
  
  
  
  