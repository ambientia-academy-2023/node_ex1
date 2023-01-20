//var määrittää globaalin muuttujan
var fname="Matti";
console.log("Nimi on "+fname);

for(var x=1; x<5; x++){
    console.log("x="+x);
}
console.log("silmukan jälkeen x="+x);

//let määrittää local muuttujan
for(let y=1; y<5; y++){
    console.log("y="+y);
}
//y on näkyvillä vain silmukan sisällä
console.log("silmukan jälkeen y="+y);

//const on myös globaali, mutta sen arvoa ei voi alustamisen
//jälkeen muuttaa
