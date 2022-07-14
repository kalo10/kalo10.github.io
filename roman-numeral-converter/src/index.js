import toRoman from '/roman-numeral-converter/src/roman.js';

var enter = document.getElementById('enter');

enter.onclick = function() {
    var num = document.getElementById('input').value;
    console.log(num);
    var num1System = document.getElementById('num1').value;
    var num2System = document.getElementById('num2').value

    var ans = document.getElementById('ans');
    num = parseInt(num);
    //console.log(typeof(num));
    console.log(num1System);
    console.log(num2System);
    if(num1System == "decimal" && num2System == "roman"){
      console.log("yes inside");
      ans.innerHTML = toRoman(num);
    }
    
  }


document.addEventListener('keydown', function(event) {
  if(event.key == "Enter") {
    var num = document.getElementById('input').value;
    console.log(num);
    var num1System = document.getElementById('num1').value;
    var num2System = document.getElementById('num2').value

    var ans = document.getElementById('ans');
    num = parseInt(num);
    //console.log(typeof(num));
    console.log(num1System);
    console.log(num2System);
    if(num1System == "decimal" && num2System == "roman"){
      console.log("yes inside");
      ans.innerHTML = toRoman(num);
    }
  }
});