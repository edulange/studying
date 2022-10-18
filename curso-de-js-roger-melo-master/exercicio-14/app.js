/*
01

- Faça com que o texto do h1 do index.html seja exibido com todas as letras  
maiúsculas.
*/
const h1Element = document.querySelector("[data-h1]"); // pegar o h1

const h1ToUpper = h1Element.innerHTML.toUpperCase(); //transformar em upper case
h1Element.innerHTML = h1ToUpper; // devolve no html

/*
02  

- Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
- Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];

numbers.forEach((numero) => {
	const UN = document.getElementsByClassName("numbers")[0];
	const li = document.createElement("li");
	li.innerHTML = numero;
	li.classList.add("number");
	UN.append(li);
});

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const unorderList = document.getElementsByClassName('numbers')
const listItems = Array.from(unorderList[0].children)
console.log(listItems)

listItems.forEach(li => {
  //qual o problema aqui? eu preciso pegar o value do li, logo li.innerHTML
    li.innerHTML % 2 === 0 ? li.style.color = 'lightblue' : li.style.color = 'pink'
});

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
