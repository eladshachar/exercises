
validate = function(){
    let isNameCorrect = false
    let isSalaryCorrect = false
    let isBirthdayCorrect = false
    let isPhoneCorrect = false

    const name = document.getElementById('name').value;
    const salary = document.getElementById('salary').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;

    const errorMessage = document.getElementById("errorMessage")
    errorMessage.innerHTML = ""

    if(name.length === 0){
        errorMessage.innerHTML += 'Name is missing'
    }
    else if(name.length <= 2){
        errorMessage.innerHTML += 'Name must contain more than two characters'
    }
    else{
        isNameCorrect = true;
    }

    if(salary >16000 || salary <10000){
        errorMessage.innerHTML += '<br>Salary must be between 10000 and 16000'
    }
    else{
        isSalaryCorrect = true
    }

    if(birthday === null){
        errorMessage.innerHTML += '<br>Missing field: Birthday'
    }
    else{
        isBirthdayCorrect = true
    }
    
    if(phone.length !== 10){
        errorMessage.innerHTML += '<br>Phone number must have 10 digits'
    }
    else{
        isPhoneCorrect = true
    }

}