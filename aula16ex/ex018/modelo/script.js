function adicionar() {
    let num = window.document.getElementById('inum')
    let li = document.getElementById('ilista')
    let res = document.querySelector('div#res')

    num = Number(num.value)
    if (num <= 0) {
        alert('NAO')
    }

}