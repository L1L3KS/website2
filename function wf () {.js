function wf () {
    let number1 = 5
    let number2 = 10
    let rusult = number1 + number2
    console.log(result)
}

function remind () {
    alert ("Знижка 20% на квиток в один бік!")
}

setTimeout(remind, 2*60*1000)

function remind(message) {
    alert(message)
}

setTimeout(function (){remind("Повідомлення")}, 2*60*1000)

send_btn.addEventListener('mouseout', make_colorful)





function name(arg){
    console.Log("Консоль каже: ", arg)
    return arg+20
}

let number = 50
console.Log(number+30)


let val = "12"
switch (+val>10) {
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
