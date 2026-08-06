function contar() {
    var inicio = Number(document.getElementById('c1').value)
    var fim = Number(document.getElementById('c2').value)
    var passo = Number(document.getElementById('p').value)
    var res = window.document.querySelector('div#res')

    res.innerHTML = ''

    if (inicio == 0 || fim == 0 || passo == 0) {
        res.innerHTML= 'Impossivel contar!'
    } else if (passo <= 0) {
        alert('[ERRO] Passo inválido! Considerando PASSO 1')
        passo = 1
    } else {
        while (inicio <= fim) {
        res.innerHTML += inicio
        inicio += passo
        }
    }
}
