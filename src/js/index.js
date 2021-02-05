/* Here goes your JS code */
const clickMeBtn = document.querySelector('#show-popup-form'),
    closeBtn = document.querySelector('.popup_close'),
    popupEl = document.querySelector('.popup'),
    email = document.querySelector('[name="login"]'),
    pass = document.querySelector('[name="pass"]'),
    submitBtn = document.querySelector('[name="submit"]'),
    termsCheckbox = document.querySelector('[name="terms"]')
let emailIsValid = false,
    passIsValid = false

clickMeBtn.addEventListener('click', () => {
    popupEl.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    popupEl.style.display = ''
})

formValidation(email, pass)

function formValidation(email, pass) {
    email.addEventListener('input', () => {
        const isValidEmail = validateEmail(email.value)
        if (!isValidEmail) {
            email.style.boxShadow = '0 0 10px red'
        } else {
            email.style.boxShadow = 'none'
            emailIsValid = true
            console.log('🚀 ~ email.addEventListener ~ emailIsValid', emailIsValid)
        }
    })
    pass.addEventListener('input', () => {
        if (pass.value.length < 8 || pass.value.length > 32) {
            pass.style.boxShadow = '0 0 10px red'
        } else {
            pass.style.boxShadow = 'none'
            passIsValid = true
            console.log('🚀 ~ pass.addEventListener ~ passIsValid', passIsValid)
        }
    })
    return emailIsValid && passIsValid
}

function validateEmail(email) {
    const emailRegExp = /\S+@\S+\.\S+/
    return emailRegExp.test(email)
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!termsCheckbox.checked) {
        document.querySelector('[for="check1"]').classList.toggle('no-valid')
        termsCheckbox.addEventListener('click', () => {
            document.querySelector('[for="check1"]').classList.toggle('no-valid')
        })
    } else if (formValidation(email, pass)) {
        // fetch
        setTimeout(() => {
            popupEl.style.display = ''

            clickMeBtn.textContent = 'Thank you!'
        }, 3000)
    } else console.log('Error')
})
