function parImpar(n) {
    if (n % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let num = 50
let res = parImpar(num)
console.log(`--------------------------------------------------`)
console.log(`O número ${num} é ${res}!`)
console.log(`--------------------------------------------------`)
