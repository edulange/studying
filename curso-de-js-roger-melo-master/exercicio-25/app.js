/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const indexOfFeb = months.findIndex(month => {
  return month === 'Fevereiro'
})
console.log(indexOfFeb) //jeito 1

const elementIndex = months.findIndex(CheckMonth);
function CheckMonth(element, index, array) {
  return index
}
console.log(elementIndex) //jeito 2

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

let dataAtual = new Date()
const presentMoment = {
  day: dataAtual.getDate(),
  month: dataAtual.getMonth(),
  year: dataAtual.getFullYear()
}
console.log(dataAtual, 'Data Atual')
console.log(presentMoment)




console.log("=========================================")

const formatDateInfo = date => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${minutes} - Segunda, 29 de Outubro de 2022`
}
const date = new Date()

console.log(formatDateInfo(date))
console.log("=========================================")


/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/
console.log(presentMoment.year, 'ano')
/*
04

- Crie um objeto de data que represente um momento passado;
- Exiba o objeto no console.
*/

const pastDate = {
  day: 05,
  month: 02,
  year: 1994
}




/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log(pastDate)

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const futureDate = {
  day: 25,
  month: 2,
  year: 2030
}

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/



/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
