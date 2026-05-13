function checkNumber(){

    let str = document.getElementById("numberInput").value;

    for(let i = 0; i < str.length; i++){

        if(str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57){

            document.getElementById("numberResult").innerHTML =
            "Це не число";

            return;
        }
    }

    document.getElementById("numberResult").innerHTML =
    "Це число";
}
function checkFloat(){

    let str = document.getElementById("floatInput").value;

    let dots = 0;

    for(let i = 0; i < str.length; i++){

        let ch = str.charAt(i);

        if(ch == "." || ch == ","){
            dots++;
            continue;
        }

        if(str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57){

            document.getElementById("floatResult").innerHTML =
            "Неправильне число";

            return;
        }
    }

    if(dots > 1){

        document.getElementById("floatResult").innerHTML =
        "Неправильне число";

    }else{

        document.getElementById("floatResult").innerHTML =
        "Правильне число";
    }
}
function removeSpaces(){

    let str = document.getElementById("spaceInput").value;

    str = str.replace(/\s+/g, ' ');

    document.getElementById("spaceResult").innerHTML =
    str;
}
function checkEmail(){

    let str = document.getElementById("emailInput").value;

    let at = str.indexOf("@");
    let dot = str.lastIndexOf(".");

    if(
        at == -1 ||
        dot == -1 ||
        at > dot ||
        dot - at < 2
    ){

        document.getElementById("emailResult").innerHTML =
        "Email неправильний";

    }else{

        document.getElementById("emailResult").innerHTML =
        "Email правильний";
    }
}
let d = new Date();

alert(
"Сьогодні " +
d.getDate() + "." +
(d.getMonth()+1) + "." +
d.getFullYear() + " " +
d.getHours() + ":" +
d.getMinutes()
);
let birthday = new Date(2006, 0, 25);
let days = [
"Неділя",
"Понеділок",
"Вівторок",
"Середа",
"Четвер",
"П'ятниця",
"Субота"
];

alert(
"Я народився у: " +
days[birthday.getDay()]
);
function timeDiff(){

    let h1 = parseInt(document.getElementById("h1").value);
    let m1 = parseInt(document.getElementById("m1").value);

    let h2 = parseInt(document.getElementById("h2").value);
    let m2 = parseInt(document.getElementById("m2").value);

    let t1 = h1 * 60 + m1;
    let t2 = h2 * 60 + m2;

    let diff = Math.abs(t2 - t1);

    let hours = Math.floor(diff / 60);
    let mins = diff % 60;

    document.getElementById("timeResult").innerHTML =
    hours + " год " + mins + " хв";
}
function checkNaN(){

    let val = document.getElementById("nanInput").value;

    if(isNaN(val)){

        document.getElementById("nanResult").innerHTML =
        "Це не число";

    }else{

        document.getElementById("nanResult").innerHTML =
        "Це число";
    }
}
let num = 15052006;

alert(
"Десяткова: " + num.toString(10)
);

alert(
"Двійкова: " + num.toString(2)
);

alert(
"Шістнадцяткова: " + num.toString(16)
);
function hypotenuse(){

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    let c = Math.sqrt(a*a + b*b);

    document.getElementById("hypoResult").innerHTML =
    c.toFixed(2);
}
const hoverImage = document.getElementById("hoverImage");

hoverImage.onmouseover = function(){
    this.src = "images/photo2.jpg";
}

hoverImage.onmouseout = function(){
    this.src = "images/photo1.jpg";
}

function checkSymbol(event){

    let kc = event.keyCode;

    if(kc < 48 || kc > 57){
        return false;
    }

    return true;
}

document.getElementById("numberInput").onkeypress = function(event){
    return checkSymbol(event);
}

function showCustomMenu(sign, x, y){

    let cm = document.getElementById("custommenu");

    if(sign){
        cm.style.visibility = "visible";
    }
    else{
        cm.style.visibility = "hidden";
    }

    cm.style.left = x + "px";
    cm.style.top = y + "px";
}

document.body.oncontextmenu = function(event){

    showCustomMenu(true, event.clientX, event.clientY);

    return false;
}

document.body.onclick = function(){

    showCustomMenu(false, 0, 0);
}

let currentFont = 16;

function doAction(actionType){

    switch(actionType){

        case "copy":

            navigator.clipboard.writeText(document.body.innerText);

            alert("Текст скопійовано");

        break;

        case "increase":

            currentFont += 2;

            document.body.style.fontSize = currentFont + "px";

        break;

        case "decrease":

            currentFont -= 2;

            document.body.style.fontSize = currentFont + "px";

        break;

        case "background":

            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

            document.body.style.background = randomColor;

        break;

        case "close":

            document.getElementById("custommenu").style.visibility = "hidden";

        break;
    }
}