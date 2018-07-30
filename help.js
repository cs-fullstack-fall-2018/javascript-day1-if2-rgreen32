var card1 = prompt("First Card")
var card2 = prompt("Second Card")
var carad3 = prompt("Third Card")
var sum = (card1 + card2 + carad3)
if(sum > 21 ){
    console.log("BUST")
}else{
    console.log("The total is" + sum)
}

///////////////////////////////////////////////////

var grapeA = prompt("enter your grade")

if (grapeA <= 100){
    console.log("A")
}else if(grapeA <90) {
    console.log("B")
}else if(grapeA <80) {
    console.log("C")
}else if(grapeA <70) {
    console.log("D")
}else if(grapeA <60) {
    console.log("F")
}
//////////////////////////////////////////////////////////////

var age = prompt("Gimme your age")

if(age > 0 && age < 125){
    console.log("REAL AGE")

}else{
    console.log("NOT REAL AGE")
}