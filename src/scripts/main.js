document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    document.querySelector('.sorteio').style.display = 'block'
        e.preventDefault();
    })

    function gerarNumero() {
        return Math.floor(Math.random() * 100);
    }

    // function resultadoSorteio() {
    //     let premiadoNaoPremiado = gerarNumero() % 2;
    //     return premiadoNaoPremiado
    // }

    document.getElementById('sortear').addEventListener('click', function() {
        if (gerarNumero() <= 50) {
            alert('Você ganhou')
        } else {
            alert('Você não ganhou')
        }
    })
})