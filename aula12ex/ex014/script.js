function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementByIdById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Boa Tarde!
        img.src = "fotomanha.jpg"
    } else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = "fototarde.jpg"
    } else {
        // Boa Noite!
        img.src = "fotonoite.jpg"
    }
}