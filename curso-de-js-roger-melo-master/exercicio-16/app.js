/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

const div = document.querySelector("[data-div]"); //ok :)

const elementsInsideDiv = Array.from(div.children); // transformei em array
console.log(elementsInsideDiv);

elementsInsideDiv.forEach((element) => {
	element.addEventListener("click", () => {
		newh2.textContent += element.innerHTML + " "; // ex 3
		console.log(`Clicou no ${element.tagName}, filho da div`); // ex
	});
});

div.addEventListener("click", () => {});

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

const newh2 = document.createElement("h2");
document.body.insertBefore(newh2, div.nextSibling); // não existe .insertAfter, mas como eu falei pra inserir before do próximo sibling, é a posição certa, imagina assim: "1 passo pra frente" "1 passo pra trás"

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

newh2.addEventListener("copy", () => {
	console.log("Texto copiado");
});

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/
const divegg = document.getElementsByClassName("egg")[0]; // pq ele cria um array, ai eu já quero pos 0 "elementSSSSS" (plural)

divegg.addEventListener("mousemove", (event) => {
	console.log(`Eixo X: ${event.clientX}, Eixo Y: ${event.clientY}`);
});

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

const button = document.querySelector("[data-button]");

button.addEventListener("click", () => {
  divegg.style.backgroundColor  = 'lightgoldenrodyellow'
});

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
	{ id: 1, name: "Pedro Henrique", profession: "Dentista" },
	{ id: 2, name: "Fábio Alexandre", profession: "Físico" },
	{ id: 3, name: "Thiago Ferreira", profession: "Veterinário" },
	{ id: 4, name: "Marcelo Antonio", profession: "Matemático" },
	{ id: 5, name: "Camilla Midori", profession: "Engenheira Civil" },
	{ id: 6, name: "Gustavo D'Aqui", profession: "Gerente de Marketing" },
	{ id: 7, name: "Ana Paula", profession: "Front-end developer" },
	{ id: 8, name: "Matheus Manucci", profession: "Piloto" },
	{ id: 9, name: "Hamilton Silva", profession: "Advogado" },
];

people.forEach(element => {
  if (element.profession === "Front-end developer") {
    console.log('existe 1')
  }
});