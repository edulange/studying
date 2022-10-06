function func1() {
    let contador = 0

    return function() {
        contador++
        return contador
    }
}

const func = func1()
console.log(func())