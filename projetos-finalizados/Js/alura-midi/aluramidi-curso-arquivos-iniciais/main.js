function playSound (selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}


const keyList = document.querySelectorAll('.tecla');

for (let index = 0; index < keyList.length; index ++) {

    const key = keyList[index];
    const instrumentSound = key.classList[1];
    const idAudio = `#som_${instrumentSound}`;

    key.onclick = function () {
        playSound (idAudio);
    };

    key.onkeydown = function (e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            key.classList.add('ativa');
        }
    };

    key.onkeyup = function () {
        key.classList.remove('ativa');
    } 
}
