var display = document.getElementById('display')
var btn = document.getElementsByClassName('btn')

for (item of btn) {
    item.addEventListener('click', function (e) {
        btnText = e.target.innerHTML
        display.value += btnText
    })
}

function backspace() {
    display.value = display.value.substr(0, display.value.length - 1)
}

function percentage() {
    display.value = display.value / 100
}

function square() {
    display.value = Math.pow(display.value, 2)
}

function sqrt() {
    display.value = Math.sqrt(display.value)
}

function dividebyone() {
    display.value = 1 / display.value
}

function cube() {
    display.value = Math.pow(display.value, 3)
}
