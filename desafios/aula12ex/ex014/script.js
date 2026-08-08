function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var fundo = document.querySelector('body')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        fundo.style.background = '#8c8ceb'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        fundo.style.background = '#D68633'
    } else {
        img.src = 'noite.jpg'
        fundo.style.background = '#2C2A27'
    }
}
