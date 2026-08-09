function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Preecha o campo!')
    } else {
        tab.innerText = ""
        let n = Number(num.value)

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = c
            tab.appendChild(item)
        }
    }
    
}