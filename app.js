const userDob = document.querySelector('.date-of-birth')
const userNumberInput = document.querySelector('.user-number')
const checkBtn = document.querySelector('.check-button')
const outputBox = document.querySelector('.output-box')


checkBtn.addEventListener('click', () => {
    if(userDob.value && userNumberInput.value){
        const sumOfBirthday = calculateSum(userDob.value)
        const userNumber = Number(userNumberInput.value)
        checkLuckyOrNot(sumOfBirthday,userNumber)
    }else{
        outputBox.innerText = 'Please Fill Both The Field First 🙄'
    }
})

function checkLuckyOrNot(sumOfBirthday,number){
    if(sumOfBirthday % number){
        outputBox.innerText = 'Yayy! Your Birthday Is Lucky.✨✨'
    }else{
        outputBox.innerText = 'Oops! Your Birthday Is Not Lucky.😶'

    }
}

function calculateSum(dob){
    const filteredDob = dob.replaceAll('-','')
    let sum = 0;
    for(num of filteredDob){
        sum+=Number(num)
    }
    return sum
}