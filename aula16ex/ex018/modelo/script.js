function adicionar() {
    let num = window.document.getElementById('inum')
    let li = document.getElementById('ilista')

    num = Number(num.value)
    if (num <= 0 || num > 100) {
        alert('[ERRO] Insira um número válido')
    } else {
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            li.appendChild(item)
    }
}

    function verificar() {
    let res = document.querySelector('div#res')
    let lista = document.getElementById('ilista')
    let maior = lista.options[0]


    if (lista.options.length > 0) {
        res.innerHTML = `<p> Ao todo, temos ${lista.options.length} números cadastrados. </p>`
    } for (let x = 0; x < lista.options.length; x++) {
        res.innerHTML += `O maior valor informado é ${x.options.length}`
    }
}
