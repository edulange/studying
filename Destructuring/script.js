const dog = {
	name: "Ellie",
	age: 4,
};

const { name: fullName, age: yearsOld, breed = 789371 } = dog;
//se eu colocar o "=" dentro do destructuring
//ele vai colocar esse item como default CASO não existir, mas caso existir vai valar o item DENTRO do objeto

console.log("yearsOld", yearsOld);
console.log("breed", breed);

// outro exemplo
const cities = {
	paris: {
		country: "France",
		language: "French",
	},
	stockholm: {
		country: "Sweden",
		language: "Swedish",
	},
};

const {
	paris,
	stockholm: { country },
} = cities;

console.log("paris", paris);
console.log("country", country);

//const getName = options => options.name //mesma coisa q em baixo, mas muito mais legível
const getName = ({ name }) => name;
console.log(getName({ name: "Marcelo" }));

const fruits = ["banana", "pera", "uva"];

let [a, ...rest] = fruits;

console.log("a, :>> ", a);
console.log("rest :>> ", rest);
console.log("fruits :>> ", fruits);

function liquidificador(xd) {
	console.log("frutas :>> ", xd);
}

const comidas = {
	banana: "banana",
	pera: "pera",
};

liquidificador(comidas.pera);
//--------------------------===============
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numSemDestruc = [numerosPares, numerosImpares];
console.log("numeros s/ destructu", numSemDestruc);
const numComDestruc = [...numerosPares, ...numerosImpares];
console.log("numeros c/ destructuring", numComDestruc);

/*
const num1 = 1
const num2 = 2
são iguais
const [num1, num2] = [1, 2]
*/
const [num1, num2, ...outrosNum] = [1, 2, 3, 4, 5, 6]; //é a mesma coisa q em cima
console.log('num1', num1)
console.log('num2', num2)
console.log('OutrosNum', outrosNum)


//const [nome1 = 'Eduardo'] = [1]
// aqui se eu der um console.log(nome1) ele vai printar nome1 = 1
const [nome1 = 'Eduardo'] = []
console.log('nome1', nome1) //já aqui, ele printa Eduardo, pq ele seria undefined
