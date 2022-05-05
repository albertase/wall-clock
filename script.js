setInterval(setClock, 1000)

const hitSound = new Audio("./sounds/625104__erokia__msfxp11-42-2-ambient-synth-loop-115-bpm.flac");
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
function setClock() {
    const currentDate = new Date();
    const myTime = currentDate.getHours()
    const getSeconds = currentDate.getSeconds() / 60;
    const getMinutes = (getSeconds + currentDate.getMinutes()) / 60
    const getHours = (getMinutes + currentDate.getHours()) / 12
    if(myTime) {
        hitSound.play()
    }
    setRotation(secondHand, getSeconds)
    setRotation(minuteHand, getMinutes)
    setRotation(hourHand, getHours)
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

