const botoes = document.querySelectorAll('.botao')

function ativarDescricao(event) {
    const botao = event.currentTarget;
    const controls = botao.getAttribute('aria-controls');
    const ativar = document.getElementById(controls)
    ativar.classList.toggle('off')
    console.log(ativar)
}

function eventoClick(botao) {
    botao.addEventListener('click', ativarDescricao)
}

botoes.forEach(eventoClick);