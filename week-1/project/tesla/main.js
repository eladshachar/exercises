let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if(boughtTesla && isUSCitizen) {
    if(currentYear-yearOfTeslaPurchase >= 4){
        console.log("would you like to upgrade?")
    }
    else{
        console.log("are you satisfied?")
    }
}
else if(boughtTesla && !isUSCitizen){
    console.log("would you like to move to the us?")
}
else{
    console.log("would you like to buy a tesla?")
}