'use strict';

const dateCalApplicationBtn = document.querySelector('.dateCalApplication');
const timerApplication = document.querySelector('.timerApplication');
const dateCalc = document.getElementById('dateCalc');
const promo__timer = document.querySelector('.promo__timer');

dateCalApplicationBtn.addEventListener('click', () => {
    dateCalc.classList.toggle('hidden');
});

timerApplication.addEventListener('click', () => {
    promo__timer.classList.toggle('hidden');
});
