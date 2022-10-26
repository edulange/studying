/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.
    
É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const button = document.querySelector(".btn");
const send = document.querySelector(".send");
const questionsContainer = document.querySelector(".questions-container");
const questionOne = document.querySelector(".form-group_um");
const questionTwo = document.querySelector(".form-group_dois");
const questionThree = document.querySelector(".form-group_tres");
let counter = 0;
button.addEventListener("click", () => {
    if (counter == 0)
	questionsContainer.style.display = "inherit";
    questionOne.style.display = "inherit";
});

send.addEventListener("click", () => {
	counter = counter + 1;
	if (counter == 1) {
        console.log(counter, 'counter 1')
		questionTwo.style.display = "inherit";
		questionOne.style.display = "none";
	}
    if (counter == 2) {
        console.log(counter, 'counter 2')
        questionThree.style.display = 'inherit'
        questionTwo.style.display = "none";
        questionOne.style.display = "none";
    }
    if (counter == 3) {
        console.log(counter, 'counter 3')
        counter = 0
        questionThree.style.display = 'none'
        questionsContainer.style.display = "none";
        console.log(counter)
    }
});
