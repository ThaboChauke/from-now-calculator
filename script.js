let submitBtn = document.getElementById("submitBtn")
let resetBtn = document.getElementById("resetBtn")

const currentMinsEl = document.getElementById("currentMinutes")
const currentHoursEl = document.getElementById("currentHours")
const currentSecondsEl = document.getElementById("currentSeconds")

const userMinsEl = document.getElementById("userMinutes")
const userHoursEl = document.getElementById("userHours")
const userSecondsEl = document.getElementById("userSeconds")
const newDateEl = document.getElementById("date")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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
}, 1000)

submitBtn.addEventListener("click", function() {
    let dateObject = new Date()

    if (userHoursEl.value !== "") dateObject.setHours(dateObject.getHours() + +userHoursEl.value)
    if (userMinsEl.value !== "") dateObject.setMinutes(dateObject.getMinutes() + +userMinsEl.value)
    if (userSecondsEl.value !== "") dateObject.setSeconds(dateObject.getSeconds() + +userSecondsEl.value)
    
    if (userSecondsEl.value === "" && userMinsEl.value === "" && userHoursEl.value === "") {
        showToast()
    } else {
        userHoursEl.value = dateObject.getHours()
        userMinsEl.value = dateObject.getMinutes()
        userSecondsEl.value = dateObject.getSeconds()

        userHoursEl.disabled = true
        userMinsEl.disabled = true
        userSecondsEl.disabled = true

        const dayName = days[dateObject.getDay()]

        newDateEl.textContent = dayName + " " + dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear()
        newDateEl.classList.add("show")
        resetBtn.classList.add("show")
    }
})

resetBtn.addEventListener("click", function() {
    window.location.reload()
})

function showToast() {
    const toast = document.getElementById("toast")
    toast.classList.add("show")
    setTimeout(() => {
        toast.classList.remove("show")
    }, 3000)
}
