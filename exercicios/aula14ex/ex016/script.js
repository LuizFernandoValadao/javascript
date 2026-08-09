var txti = document.getElementById('txtinc')
var txtf= document.getElementById('txtfim')
var txtp = document.getElementById('txtpas')

function contar() {
    if (txti == null || txtf == null || txtp == null) {
        alert('Preencha os campos!')
    } else {
        var inicio = Number(txti.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)
        if (passo == 0) {
            passo = 1
        }
        var res = document.getElementById('res')
        res.innerHTML = "Contando <br/>"
        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c}&#x1F449`
        res.innerHTML += '&#x1F3F4'
        }
    
    }
    
}