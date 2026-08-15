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
            document.getElementById('txtnum').value = ''
        }
        

    }
}

function finalizar() {
    if (list.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        list.sort()
        let res = document.getElementById('res')
        res.innerText = `Ao todo, temos ${list.length} números cadastrados.` 
        res.innerText += `\nO maior valor informado foi ${list[list.length-1]}`
        res.innerText += `\nO menor valor informado foi ${list[0]}`
        let soma = 0
        for (let i in list) {
            soma += list[i]
        }
        res.innerText += `\nSomando todos os valores, temos ${soma}`
        res.innerText += `\nA média dos valores digitados é ${soma/list.length}`   
    }
    
}