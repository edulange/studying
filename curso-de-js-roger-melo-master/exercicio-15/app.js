/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('[data-vtnc]')
console.log(ul)

for (const child of ul.children) {
  child.classList.add('videos')
}



/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.getElementsByTagName('h2') // ele cria um array pq são "elements" mesmo sendo só 1.
const paidoh2 = h2[0].parentNode //por isso precisa chamar na posição 0
console.log(paidoh2)



/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.getElementsByTagName('h1')
const nextBrother = h1[0].nextElementSibling
console.log(nextBrother)



/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
const previousSibling = ul.previousElementSibling
console.log(previousSibling)


/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const li = Array.from(ul.children)


li.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.innerHTML)
  })
});


/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]


const button = document.querySelector('[data-button]')


button.addEventListener('click', () => {
  for (const video of videos) {
    const textInVideos = video.name
    var ul = document.querySelector('[data-vtnc]')
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(textInVideos));
    ul.appendChild(li);
  }
})



/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

//q q eu preciso fazer:
//1- ao clicar no h1 invocar uma função
// a função deve deletar todos os filhos do body(elementos inside body)
// pra isso eu preciso chamar o h1 pelo dom:
// pra isso eu rpeciso chamar o body pelo dom:
const h1Click = document.querySelector('[data-h1]') //ok

h1Click.addEventListener('click', () => {  //click funcionando
  const body = document.querySelector('#parent') //ok
  while (body.firstChild) {
    body.removeChild(body.firstChild)
  }
})
//foi difícil mas deu :)