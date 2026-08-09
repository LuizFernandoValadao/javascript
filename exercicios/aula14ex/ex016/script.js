function contar() {
    var txti = document.getElementById('txtinc')
    var txtf= document.getElementById('txtfim')
    var txtp = document.getElementById('txtpas')
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0)  {
        alert('[ERRO] Faltam dados!')
    } else {
        var inicio = Number(txti.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)
        if (fim < inicio) {
            if (passo == 0) {
            passo = 1
        }
            var res = document.getElementById('res')
            res.innerHTML = "Contando <br/>"
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
        
            }
            res.innerHTML += '\u{1F3F4}'
        } else {
           if (passo == 0) {
            passo = 1
            }
            var res = document.getElementById('res')
            res.innerHTML = "Contando <br/>"
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
        
            }
            res.innerHTML += '\u{1F3F4}' 
        }
        
    }
    
}