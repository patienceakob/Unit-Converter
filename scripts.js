/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const lengthContainer = document.getElementById("length-container")
const volumeContainer = document.getElementById("volume-container")
const massContainer = document.getElementById("mass-container")




function convert() {
    const meterToFeet = (input.value * 3.281).toFixed(3)
    const feetToMeter = (input.value/3.281).toFixed(3)
    const literToGallon = (input.value * 0.264).toFixed(3)
    const gallonToLiter = (input.value/0.264).toFixed(3)
    const kiloToPounds = (input.value * 2.204).toFixed(3)
    const poundsToKilos = (input.value/2.204).toFixed(3)

    lengthContainer.textContent = ""
    volumeContainer.textContent = ""
    massContainer.textContent = ""
    
    if(input.value !== "" || input.value !== 0)
        {
   
        lengthContainer.textContent+= ` ${input.value} meters = ${meterToFeet} 
        feet | ${input.value} feet = ${feetToMeter} meters `

        volumeContainer.textContent+= `${input.value} liters = ${literToGallon} 
        gallons | ${input.value} gallons = ${gallonToLiter} liters`

        massContainer.textContent+= `${input.value} kilos = ${kiloToPounds} 
        pounds | ${input.value} pounds = ${poundsToKilos} kilos`
    }


    
}

convertBtn.addEventListener("click", convert)