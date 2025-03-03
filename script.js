let submitBtn = document.getElementById("submitBtn")
const currentMinsEl = document.getElementById("currentMinutes")
const currentHoursEl = document.getElementById("currentHours")
const currentSecondsEl = document.getElementById("currentSeconds")

const runClock = setInterval(function currentTime() {
    let dateObject = new Date()
    let hours = dateObject.getHours()
    let minutes = dateObject.getMinutes()
    let seconds = dateObject.getSeconds()

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    currentHoursEl.textContent = hours
    currentMinsEl.textContent = minutes
    currentSecondsEl.textContent = seconds

    console.log(hours, minutes, seconds)
}, 1000)


submitBtn.addEventListener("click", function() {
    console.log("here")
})
