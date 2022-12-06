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
        country: 'France',
        language: 'French'
    },
    stockholm: {
        country: 'Sweden',
        language: 'Swedish'
    }
}

const { paris, stockholm: { country } } = cities

console.log('paris', paris)
console.log('country', country)

//const getName = options => options.name //mesma coisa q em baixo, mas muito mais legível
const getName = ({ name }) => name
console.log(getName({name: 'Marcelo'}))