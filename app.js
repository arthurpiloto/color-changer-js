'use strict'

function aplicarCor() {
    const cor = document.getElementById('inputCor').value
    // document.body.style.backgroundColor = `#${cor}`
    document.documentElement.style.setProperty('--bg-color', `#${cor}`)
}

document.getElementById('aplicarCor').addEventListener('click', aplicarCor)