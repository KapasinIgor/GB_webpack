'use strict';

import audio1 from "../audio/1.mp3";
import audio2 from "../audio/2.mp3";
import audio3 from "../audio/3.mp3";


const media = [
    {id: 1, title: 'Птички летом', audio: `${audio1}`},
    {id: 2, title: 'Ручеек в ущелье', audio: `${audio2}`},
    {id: 3, title: 'Закат в лесу', audio: `${audio3}`}
];

const renderAudio = (title, audio) => {

    return `<div class="block">                
                    <audio src="${audio}" controls></audio>                              
                    <h3>${title}</h3>
            </div>`;
};

const renderAudioPage = (list) => {
    const renderMap = list.map(object => renderAudio(object.title, object.audio)).join("");
    document.querySelector('.gallery__section').insertAdjacentHTML('beforeend', renderMap);
};



renderAudioPage(media);