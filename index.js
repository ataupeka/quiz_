const image = document.querySelector('img');
const text = document.querySelector('h2');
//console.log(image, text);

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
//console.log(buttonOne, buttonTwo);

buttonOne.addEventListener('click', mrBig);
buttonTwo.addEventListener('click', aiDen);

function mrBig() {
    image.setAttribute('src', '../assets/1.jpg');
    text.innerHTML = 'ОНИ ПОЖЕНЯТСЯ?';
    buttonOne.innerHTML = 'ДА, НО НЕ СРАЗУ';
    buttonTwo.innerHTML = 'НИКОГДА';

    buttonOne.addEventListener('click', wedding);
    buttonTwo.addEventListener('click', neverMarried);
}

function wedding() {
    image.setAttribute('src', '../assets/2.jpg');
    text.innerHTML = 'ОНИ ПОЖЕНЯТСЯ И БУДУТ СЧАСТЛИВЫ, НО У НИХ НЕ БУДЕТ ДЕТЕЙ';
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function neverMarried() {
    image.setAttribute('src', '../assets/3.jpg');
    text.innerHTML = 'ОН ЕЁ БРОСИТ У АЛТАРЯ';
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function aiDen() {
    image.setAttribute('src', '../assets/4.jpg');
    text.innerHTML = 'ОНИ БУДУТ СЧАСТЛИВЫ?';
    buttonOne.innerHTML = 'ДА';
    buttonTwo.innerHTML = 'НЕТ';

    buttonOne.addEventListener('click', happy);
    buttonTwo.addEventListener('click', unhappy);
}

function happy() {
    image.setAttribute('src', '../assets/5.jpg');
    text.innerHTML = 'ДА И У НИХ РОДИТСЯ РЕБЁНОК';
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function unhappy() {
    image.setAttribute('src', '../assets/6.jpg');
    text.innerHTML = 'НЕТ ОНИ РАЗОЙДУТСЯ ИЗ_ЗА ИЗМЕНЫ КЕРРИ';
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}
