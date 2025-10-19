
const inputEL = document.getElementById("input")
const convertBtn = document.getElementById("convert-Btn")
const lengthEL = document.getElementById("Length")
const volumeEL = document.getElementById("Volume")
const massEL = document.getElementById("Mass")


convertBtn.addEventListener("click", function(){
    const unit = Number(inputEL.value)
    getLength(unit)
    getVolume(unit)
    getMass(unit)
})


function getLength(unit){
    const feet = (unit * 3.281).toFixed(3)
    const meters = (unit / 3.281).toFixed(3)
    lengthEL.innerHTML = `<p>${unit} meters = ${feet} feet | ${unit} feet = ${meters}</p>`
} 

function getVolume(unit){
    const gallons = (unit * 0.264).toFixed(3)
    const liters = (unit / 0.264).toFixed(3)
    volumeEL.innerHTML = `<p>${unit} meters = ${gallons} gallons | ${unit} gallons = ${liters} liters</p>`
}

function getMass(unit){
    const pounds = (unit * 2.204).toFixed(3)
    const kilos = (unit / 2.204).toFixed(3)

    massEL.innerHTML = `<p>${unit} kilos = ${pounds} feet | ${unit} pounds = ${kilos} kilos</p>`
}

