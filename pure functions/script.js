console.log('hello world')

const somar = (num1, num2) => num1+num2
// é uma função pura, pq não depende de ngm, só das entradas dela.

if (typeof somar(15,30) === 'number') {
    console.log(true)
}
// somar só depende dos valores de entrada

const somarDois = (num1, num2) => {
    if (num1 > num2) {
        return num1-num2
    } 
    return num2-num1
}
//pq utilizamos função pura?
//pq podemos ir concatenando
// eu posso ir dividindo em pequenas funções que eu tenho ctz de que já estão funcionando
