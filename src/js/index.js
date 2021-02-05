/* Here goes your JS code */
const clickMeBtn = document.querySelector('#show-popup-form'),
    closeBtn = document.querySelector('.popup_close'),
    popupEl = document.querySelector('.popup'),
    email = document.querySelector('[name="login"]'),
    pass = document.querySelector('[name="pass"]'),
    submitBtn = document.querySelector('[name="submit"]'),
    termsCheckbox = document.querySelector('[name="terms"]')

clickMeBtn.addEventListener('click', () => {
    popupEl.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    popupEl.style.display = ''
})

formValidation(email, pass)

function formValidation(email, pass) {
    let emailIsValid = (passIsValid = checkboxIsValid = false)

    email.addEventListener('input', () => {
        const isValidEmail = validateEmail(email.value)
        if (!isValidEmail) {
            email.style.boxShadow = '0 0 10px red'
        } else {
            email.style.boxShadow = 'none'
        }
    })
    pass.addEventListener('input', () => {
        if (pass.value.length < 8 || pass.value.length > 32) {
            pass.style.boxShadow = '0 0 10px red'
        } else {
            pass.style.boxShadow = 'none'
        }
    })
}

function validateEmail(email) {
    const emailRegExp = /\S+@\S+\.\S+/
    return emailRegExp.test(email)
}
