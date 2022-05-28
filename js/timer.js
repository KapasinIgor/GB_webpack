'use strict';

let deadline = '';

const inputDeadline = document.querySelector('.inputDeadline');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

function testValue() {
    if (inputDeadline.value) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

testValue();

inputDeadline.addEventListener('input', (event) => {
    testValue();
})

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    deadline = inputDeadline.value;
    startButton.disabled = true;

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function stopTimer() {
            clearInterval(timeInterval);
        }

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                stopTimer();
                const sound = new Howl({
                    src: ['/dzin.mp3']
                });
                sound.play();
                startButton.disabled = false;
            }
        }

        stopButton.addEventListener('click', (event) => {
            event.preventDefault();
            stopTimer();
            startButton.disabled = false;
        });
    }

    setClock('.timer', deadline);
});

