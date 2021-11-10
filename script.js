let subButton = document.getElementById("submit")
let processor = document.getElementById("selProcessor")
let keyboard = document.getElementById("selKeyboard")
let mouse = document.getElementById("selMouse")
let monitor = document.getElementById("selMonitor")
let ram = document.getElementById("selRam")
let system = document.getElementById("selSystem")

let zakButton = document.getElementById("zakazofor")
subButton.addEventListener('click', function () {
    let procValue = processor.value
    let keyValue = keyboard.value
    let mouseValue = mouse.value
    let monValue = monitor.value
    let ramValue = ram.value
    let sysValue = system.value

    let choice = [procValue, keyValue, mouseValue, monValue, ramValue, sysValue]
    console.log(choice)
})

zakButton.addEventListener('dblclick', function () {
    console.log('heh')
    window.location.href = 'registration.html'
})