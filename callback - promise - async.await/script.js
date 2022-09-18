const fs = require("fs");
// importando o 'firesystem' é melhor para fazer testes

console.log(1);

/*
------------------------------ callbacks -----------------------------------------

fs.readFile('test1.txt', callback)  // "leia esse arquvio, qnd estiver pronto me chama de volta
function callback (err, content) {  // só deixei assim pra deixar claro q é um callback
    console.log(err, String(content))   // callback sempre retorna um erro + o content
}
*/
//vamos supor que eu queira entao ler um arquivo dentro do callback
fs.readFile("./test1.txt", (err, content) => {
	console.log("leu o primeiro", String(content));
	fs.readFile("./test2.txt", (err2, content2) => {
		console.log(err2, String(content2));
	});
});
// isso aqui nos demonstra um problema, a medida que a gente precisa ficar lendo mais arquivos, vai gerando mais callbacks, dentro de callbacks
// sempre crescer o código para BAIXO invés de para frente.

//------------------------------------------------------ Promises -------------------------
// qnd eu faço um callback, eu falo que vou chamar depois, qnd eu vou fazer uma promise eu já retorno de imediato que no futuro eu retorno algo

const readFile = (file) =>
	new Promise((resolve, reject) => {
		//dado uma promessa eu tenho duas opções, eu faço algo(resolvo) ou eu rejeito algo
		fs.readFile(file, (err, contents) => {
			//o famoso callback
			if (err) {
				//se deu erro! (se erro = true)
				reject(err); // eu rejeito
			} else {
				//senão eu aceito
				resolve(contents); // eu resolvo o conteudo
			}
		});
	});

readFile("./test2.txt") //com o promise o código cresce para 'baixo', sempre deve-se fazer isso.
	.then((contents) => {
		console.log("a", String(contents));
		return readFile("./test1.txt");
	})
	.then((contents) => {
		console.log("deu certo", String(contents));
	});

//---------------------------------------------------- final da promises ----------------------

//---------------------------------------------------- async/await ----------------------
//ele é o açucar sintático, uma forma mais bonita de enxergar uma promise
// callbacks novamente, são quando eles devolvem uma função quando determinada açõa é feito
// e.g. "ler um arquivo" devolve uma função qnd ler

//uma função async na realidade é uma promise
// e caso o async der problema, oq a gente faz? a gente TRATA ele com try & catch
const init = async () => {
	try {
		const contents = await readFile("./test1.txt");
		const contents2 = await readFile("./test2.txt");
		//console.log("async ===", String(contents), String(contents2));
		return "ASYNC" + " " + String(contents) + "\n" + String(contents2);
	} catch (err) {
		console.log(err);
	}
};

//COMO O ASYNC É UMA PROMISE EU POSSO METER UM THEN()
init().then((contents) => console.log(contents));

console.log("último console");
