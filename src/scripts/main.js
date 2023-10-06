document.addEventListener('DOMContentLoaded', function() {

    let form = document.getElementById('form-cadastro')
    let mostrarSorteio = document.querySelector('.sorteio')
    let resPos = document.getElementById('resultado-positivo')
    let resNeg = document.getElementById('resultado-negativo')
    let premio = document.getElementById('premio')
    let btnSortear = document.getElementById('sortear')
    let btnConfirmar = document.getElementById('btn-confirmar')
    let gerarNumero = Math.floor(Math.random() * 10)

    form.addEventListener('submit', function(e) {
        mostrarSorteio.style.display = 'block'
        e.preventDefault();
    })

    btnSortear.addEventListener('click', function() {
        if (gerarNumero < 4) {
            resPos.style.display = 'block'
            premio.innerText = '5% de desconto na sua próxima compra,'
            btnSortear.style.display = 'none'
        } else if (gerarNumero < 6) {
            resPos.style.display = 'block'
            premio.innerText = '10% de desconto na sua próxima compra,'
            btnSortear.style.display = 'none'
        } else if (gerarNumero < 7) {
            resPos.style.display = 'block'
            premio.innerText = 'uma camisa exclusiva,'
            btnSortear.style.display = 'none'
        } else {
            resPos.style.display = 'none'
            resNeg.style.display = 'block'
            btnSortear.style.display = 'none'
        }

        btnConfirmar.style.display = 'block'
        btnConfirmar.addEventListener('click', function() {
            form.submit()
        })
    })
})