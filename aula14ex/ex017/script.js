function gerar() {
    let num = window.document.getElementById('inumero')
    let res = window.document.querySelector('div#res')

    if (num.value.length == "") {
        alert('[ERRO] Você não digitou nenhum número')
    } else {
        let n = Number(num.value)
        
        res.innerHTML = ''
        
        for (let g = 1; g <= 10; g++) {
                res.innerHTML += `${n} x ${g} = ${n * g}<br>`
         }
    }
}