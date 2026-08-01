function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Boa Dia!
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e6ce9b'
    } else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#dc9b0d'
    } else {
        // Boa Noite!
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#02173c'
    }
}