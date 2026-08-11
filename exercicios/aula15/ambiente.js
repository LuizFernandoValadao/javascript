let num = [5, 8, 2, 9, 3]
console.log('------------------------------------------------------')
console.log(`Nosso vetor é o ${num} e tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O ultimo valor do vetor é ${num[num.length-1]}`)
num.sort()
console.log(`O vetor em ordem fica: ${num}`)
console.log('------------------------------------------------------')
/*
for (let c = 0; c <= 4; c++) {
    console.log(num[c])
}
*/
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}