

function app() {
    var ans = document.getElementById("romanNum");
    var num = document.getElementById('num').value;
    //console.log(num);
    num = parseInt(num);
    //console.log(typeof(num));
    ans.innerHTML = convertToRoman(num);

}



function convertToRoman(num) {
    function getDigit(digit, pos){
      let noOfDigits = [[], ['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
      let romDigit = "";
      switch(digit){
        case 1:  return noOfDigits[pos][0];
        case 2:  return noOfDigits[pos][0] + noOfDigits[pos][0];
        case 3:  return  noOfDigits[pos][0] + noOfDigits[pos][0] + noOfDigits[pos][0];
        case 4: return noOfDigits[pos][0] + noOfDigits[pos][1];
        case 5: return noOfDigits[pos][1];
        case 6: return noOfDigits[pos][1] + noOfDigits[pos][0];
        case 7: return noOfDigits[pos][1] + noOfDigits[pos][0] + noOfDigits[pos][0];
        case 8: return noOfDigits[pos][1] + noOfDigits[pos][0] + noOfDigits[pos][0] + noOfDigits[pos][0];
        case 9: return noOfDigits[pos][0] + noOfDigits[pos + 1][0];
        case 0: return "";
      }
    }
  
  
    let romanNum = "";
    let pos = 0;
    while(num > 0){
      let digit = num % 10;
      pos++;
      romanNum = getDigit(digit, pos) + romanNum;
      num = Math.floor(num/10);
    }
  
   return romanNum;
  }