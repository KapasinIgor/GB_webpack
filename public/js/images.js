'use strict';

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.gif";

const media = [
    {id: 1, title: 'Мельница у реки', image: `${img1}`},
    {id: 2, title: 'Горы осенью', image: `${img2}`},
    {id: 3, title: 'Деревня летом', image: `${img3}`},
    {id: 4, title: 'Анимированный котик', image: `${img4}`}
];

const renderMedia = (title, image) => {

    return `<div class="block">                
                    <img src="${image}" alt="${title}">                                
                    <h3>${title}</h3>
            </div>`;
};

const renderPage = (list) => {
    const renderMap = list.map(object => renderMedia(object.title, object.image)).join("");
    document.querySelector('.gallery__section').insertAdjacentHTML('beforeend', renderMap);
};

renderPage(media);