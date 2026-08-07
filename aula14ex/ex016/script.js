function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        // alert('[ERRO] Falta dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(iinicio.value)
        let f = Number(ifim.value)
        let p = Number(ipasso.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        } 
    } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c -= p) {
               res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}