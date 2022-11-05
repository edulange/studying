/*
console.log("studying async, fetch");

async function pegaDados() {
	const resultado = await fetch("https://api.github.com/users/edugod") // disparamos uma requisição
  const resultadoConvertido = await resultado.json()
  console.log('resultado:', resultado)
  console.log('resultadoJSON', resultadoConvertido)


}
pegaDados()

async function testeSimples() { return 'testando'} 
testeSimples()
//basicamente: se eu crio uma função ela retorna uma função
// se eu deixo o async na frente, ela vira uma promise de uma função
///======================= pra eu utilizar await, eu preciso chamar alguém de await
*/

/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

async function getPikachu() {
	const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
	console.log(resultado);
}

getPikachu();

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const personalInfo = {
	name: "Eduardo",
	lastName: "Lange",
	sex: "Male",
	age: "28",
	height: "1.73",
	wheight: "100",
	walking: false,
	metersWalked: 0,
};

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

personalInfo.speaking = function () {
	console.log("123");
};
personalInfo.addAge = function () {
	++this.age;
};
personalInfo.addAge();
personalInfo.addAge();
personalInfo.addAge();
personalInfo.addAge();
personalInfo.addAge();
console.log(personalInfo);
console.log(personalInfo.age);

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
personalInfo.sumMetersWalked = function (metersToSum) {
	this.walking = true;
	this.metersWalked = this.metersWalked + metersToSum;
};
personalInfo.sumMetersWalked(4);
personalInfo.sumMetersWalked(2);
personalInfo.sumMetersWalked(2.5);
personalInfo.sumMetersWalked(8.67);
console.log(personalInfo.walking, personalInfo.metersWalked);

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/
personalInfo.myinformation = function () {
	return `Oi. Eu sou o ${this.name} ${this.lastName}, tenho ${this.age} anos, ${this.height} metros de altura, 
  peso ${this.wheight} quilos e, só hoje, eu já caminhei ${this.metersWalked}
  metros.`;
};

console.log(personalInfo.myinformation());

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

let booleano;
function func(value) {
  if (value) {
    booleano = true
    return booleano
  } else {
    booleano = false
    return booleano
  }
}
console.log(func(false), 'falsy func')
console.log(func(''), 'falsy func')
console.log(func(0), 'falsy func')
console.log(func(undefined), 'falsy func')
console.log(func(null), 'falsy func')
console.log(func(NaN), 'falsy func')


console.log(func(1), 'truty func')
console.log(func('false'), 'truty func')
console.log(func('0'), 'truty func')
console.log(func({}), 'truty func')
console.log(func(function(){}), 'truty func')
console.log(func([]), 'truty func')




/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

