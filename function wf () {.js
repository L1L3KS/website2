function wf () {
    let number1 = 5
    let number2 = 10
    let rusult = number1 + number2
    console.log(result)
}


let x = 10;
let y = "1";
let z = "String"
let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let r = true
let h = true // yes / так / правда 
let g = false // no / ні / хиба 

let f = null
let t = undefined
let s = NaN

console.log(x == y) 

console.log(x != y)  

console.log(r == +y) 

console.log(x != d)  

console.log(g  == f) 

console.log(t == s)

console.log(x != 10) 


console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x^y)
console.log(x/ y)


if (x == y) {
    console.log("X більший за Y")
} else if (x < y) {
    console.log("Y більший за X")
} else {
    console.log("x дорівнює y")
}

switch(4){
case 1:
    console.log("Понеділок") 
break;

case 2:
    console.log("Вівторок")
break;

case 3:
    console.log("Середа")
break;

case 4:
    console.log("Четвер")
break;

case 5:
    console.log("П'ятниця")
break;

default:
    console.log("Ти загубився в часі")

}


function oven(a, b){
    t = 200
    res = a * b + t
    return res
}

let pie = oven(2, 3)

console.log(pie)







function remind () {
    alert ("Знижка 20% на квиток в один бік!")
}

setTimeout(remind, 2*60*1000)

function remind(message) {
    alert(message)
}

setTimeout(function (){remind("Повідомлення")}, 2*60*1000)
setInterval(function (){remind("Повідомлення")}, 30*60*1000)

send_btn.addEventListener('mouseout', make_colorful)


function name(arg){
    console.Log("Консоль каже: ", arg)
    return arg+20
}

let number = 50
console.Log(number+30)


let val = "12"
switch (+4>10) {
    case 11:
        console.log("Arg = 11!")
    break;
    case 12:
        console.log("Arg = 12!")
    break;
    default:
        console.log("Такої умови не було описано")
}



/* function remind(asdawd) {
    alert (asdawd)
}*/




function remind() {
    setTimeout(function(){alert("ura")} , 5000)
}
let krosivki = document.getElementById("vapormax")
krosivki.addEventListener("mouseover", remind())
