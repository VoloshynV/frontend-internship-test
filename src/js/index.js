/* Here goes your JS code */
const clickMeBtn = document.querySelector('#show-popup-form'),
    closeBtn = document.querySelector('.popup_close'),
    popupEl = document.querySelector('.popup')

clickMeBtn.addEventListener('click', () => {
    popupEl.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    popupEl.style.display = ''
})
