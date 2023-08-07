const keyList = document.querySelectorAll('input[type=button]');
const keyInput = document.querySelector('input[type=tel');

for (let index = 0; index < keyList.length; index++) {

    const key = keyList[index];

    key.onclick = function () {
        keyInput.value += key.value;
    }

    key.onkeydown = function (event) {
        if(event.code === "Enter" || event.code === "Space") {
            key.classList.add('ativa');
        }
    }
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}


