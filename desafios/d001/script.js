let list = []
let cont = 1

function adicionar() {
    let txtn = document.getElementById('txtnum')
    if (txtn.value.length == 0) {
        alert('[ERRO] Digite um Número!')
    } else if (txtn.value < 1 || txtn.value > 100) {
        alert('Digite um valor entre 1 e 100!')
    } else {
        let num = Number(txtn.value)
        let n = 0
        while (n < list.length) {
            if (list[n] == num) {
                break
            }
            n++
        }
        if (list[n] == num) {
            alert('Número já adicionado!')
        } else {
            list.push(num)
            let select = document.getElementById('nlista')
            let opt = document.createElement('option')
            opt.text = `Valor ${num} adicionado`
            opt.value = cont
            select.appendChild(opt)
            cont++
        }
        

    }
}

function finalizar() {
    let res = document.getElementById('res')
    res.innerText = `Ao todo, temos ${list.length} números cadastrados.`
}