const form = document.getElementById('novoItem');
const list = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];


itens.forEach(element => {
    newElement(element)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const currentItem = {
        'nome': nome.value,
        'quantidade': quantidade.value,
    };

    newElement(currentItem);

    itens.push(currentItem);

    localStorage.setItem('itens', JSON.stringify(itens));

    nome.value = ''
    quantidade.value = ''
});

function newElement(item) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.quantidade;
    newItem.appendChild(numberItem);
    newItem.innerHTML += item.nome;

    list.appendChild(newItem);
};
