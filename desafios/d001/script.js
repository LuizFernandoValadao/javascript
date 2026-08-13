function adicionar() {
    let txtn = document.getElementById('txtnum')
    if (txtn.value.length == 0) {
        alert('[ERRO] Digite um Número!')
    } else if (txtn.value < 1 || txtn.value > 100) {
        alert('Digite um valor entre 1 e 100!')
    } else {
        let num = Number(txtn.value)
        let list = []
        list.push(num)
        let select = document.getElementById('nlista')
        let opt = document.createElement('option')
        opt.text = num
        opt.value = 1
        select.appendChild(opt)
        return list

    }
}

let l = adicionar()

function finalizar() {
    alert(`45454${l}`)
}