//são funções que recebem outras funções

function teste(acao) {
	acao();
}
teste(() => console.log("ola"));

//hof manjadas:
const valores = [1, 2, 3, 4];

const dobro = valores.map((valor) => valor * 2);
//map é uma hof
console.log(dobro); //dobrou tudo
//valores.map( valor => console.log(valor))
//
//forEach tb é um HOF
//valores.forEach(valor => console.log(valor))
//reduce tb
const soma = valores
	.filter((valor) => valor % 2 === 0) // se for true, ele e entra, senão não
	.map((valor) => valor * 2)
	.reduce((previous, current) => previous + current, 0);
console.log(soma);
// ele dobra todos e soma depois
