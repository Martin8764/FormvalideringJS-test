//Uppgift 1 JS

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



// Testa om det går att förflyttas till en annan sida genom register knappen

function myFunction() {
    window.location.href="http://programminghead.com";
  }



/* Uppgift 1 orginal kod som inte blev helt klar

var RNr = Math.random() * (100 - 1) + 1;
var XArray = [];

for (i = 0; i <= RNr; i = i + 1) { // fel här omrandom RNr
 XArray[i] = i;
}

document.write('Talen visas i ordning' + '');
for (i = 1; i <= RNr; i = i + 1) {
 document.write(XArray[i] + '<br />');
}

function sort_default() {

    XArray.sort();
   
    for (i = 0; i < RNr; i = i + 1) {
     RandomSortArray.innerHTML = RandomSortArray.innerHTML + XArray[i] + '<br />';
    }
   }

*/


// Uppgift 2 JS



