const botaoclick = document.querySelector('#calcular')
const resultado = document.querySelector('.resultado')

botaoclick.addEventListener('click', ()=> {
    console.log('Fui clicado')
    resultado.innerHTML = 'Fui clicado'
});
