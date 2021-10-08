

var XArray = [] 
    for( let i = 1; i < 11; i++)
    {
        if(XArray.length < 11){
            var RNr = Math.floor(Math.random() * 100);
            if(!XArray.push(RNr))
            {
               XArray.push(RNr);
            }
        }
    }
console.log(XArray)

document.getElementById("1").innerHTML=XArray[0];
document.getElementById("2").innerHTML=XArray[1];
document.getElementById("3").innerHTML=XArray[2];
document.getElementById("4").innerHTML=XArray[3];
document.getElementById("5").innerHTML=XArray[4];
document.getElementById("6").innerHTML=XArray[5];
document.getElementById("7").innerHTML=XArray[6];
document.getElementById("8").innerHTML=XArray[7];
document.getElementById("9").innerHTML=XArray[8];
document.getElementById("10").innerHTML=XArray[9];

XArray.push(RNr);

XArray.sort(function(a,b){return a-b});

document.getElementById("q").innerHTML=XArray[0];
document.getElementById("w").innerHTML=XArray[1];
document.getElementById("e").innerHTML=XArray[2];
document.getElementById("r").innerHTML=XArray[3];
document.getElementById("t").innerHTML=XArray[4];
document.getElementById("y").innerHTML=XArray[5];
document.getElementById("u").innerHTML=XArray[6];
document.getElementById("i").innerHTML=XArray[7];
document.getElementById("o").innerHTML=XArray[8];
document.getElementById("p").innerHTML=XArray[9];


function myFunction() {
    window.location.href="https://www.youtube.com/";
  }



