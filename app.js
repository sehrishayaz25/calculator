function getNumber(num){
    var display = document.getElementById("display");
    display.value += num;
}

function clearDisplay(){
    var display = document.getElementById("display");
    display.value = ""
}

function getResult(){
    var display = document.getElementById("display");
    display.value = eval(display.value)
}