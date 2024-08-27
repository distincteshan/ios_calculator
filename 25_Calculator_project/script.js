const display = document.getElementById("output")

function cleardisplay(){
    display.value = null
}

function appendToDisplay(input) {
    display.value = display.value + input
}

function calculate() {
    display.value = eval(display.value)
}

function backspace() {
    let value = display.value.toString()
    display.value = value.slice(0,-1)
}

