import convertToRoman from './converter';

function app() {
    
    var ans = document.getElementById("romanNum");
    var num = document.getElementById('num').value;
    console.log(num);
    num = parseInt(num);
    console.log(typeof(num));
    ans.innerHTML = convertToRoman(num);

}