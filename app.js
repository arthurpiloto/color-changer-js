'use strict'

function aplicarCor() {
    const cor = document.getElementById('inputCor').value.toLowerCase()
    if (cor == 'azul') {
        document.documentElement.style.setProperty('--bg-color', '#476bd5')
    } else if (cor == 'vermelho') {
        document.documentElement.style.setProperty('--bg-color', '#d86755')
    } else if (cor == 'verde') {
        document.documentElement.style.setProperty('--bg-color', '#8cdd8c')
    } else if (cor == 'amarelo') {
        document.documentElement.style.setProperty('--bg-color', '#e6e67a')
    } else {
        alert('Digite uma das opções válidas')
    }

    // document.body.style.backgroundColor = `#${cor}`
    // document.documentElement.style.setProperty('--bg-color', `#${cor}`)

}

document.getElementById('aplicarCor').addEventListener('click', aplicarCor)