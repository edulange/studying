const teste = 'testando'
// existe um escopo dentro do arquivo módulo, se eu coloco algo abaixo do export, não vai ser lido
// mas como no JS existe o hoisting, primeiro é lido as fnções, então ela pode ficar lá embaixo 
module.exports = {
    a: 1,
    teste,
    testandoFuncao
}

function testandoFuncao() {
    console.log('aqui foi')
}
