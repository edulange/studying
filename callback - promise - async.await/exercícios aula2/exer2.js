/*
2) A função readdir disponível no módulo fs do Node,
 permite ler um diretório, e retornar seu conteúdo como um vetor. 
 Crie uma versão em Promise da função.

Dica: a assinatura da função é: fs.readdir(caminho, (err, files) => {})
*/
const fs = require("fs");

const readFile = (file) =>
	new Promise((resolve, reject) => {
		//dado uma promessa eu tenho duas opções, eu faço algo(resolvo) ou eu rejeito algo
		fs.readdir(file, (err, contents) => {
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

fs.readdir("./").then((contents) => console.log(contents));
