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

    function verificar() {
    let res = document.querySelector('div#res')

    if (num.length > 0){
        res.innerHTML = `Ao todo, temos ${num.length} números cadastrados.`
    }
}
}
