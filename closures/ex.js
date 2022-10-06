/*
1) Qual o resultado da execução deste trecho de código e porquê?

function test() {  ​   console.log(a)   console.log(foo())
   
   var a = 1
   function foo() {
      return 2
   }
}

test()
*/
function test() {
	console.log(a);
	console.log(1, "-", foo());

	var a = 1;
	function foo() {
		return 2;
	}
}
test();
//undefined <br> 2 // acertei :) GOD

var a = 1;

function someFunction(number) {
	function otherFunction(input) {
		return a;
	}

	a = 5;

	return otherFunction;
}

var firstResult = someFunction(9); // só atribuiu uma função a variável
var result = firstResult(2); // só atribuiu uma função a variável

/*
2) Qual o resultado?
//NADA , ngm chamou ela...
*/

var fullname = "Tulio Faria";
var obj = {
	fullname: "Jose Silva",
	prop: {
		fullname: "Nome Sobrenome",
		getFullname: function () {
			return this.fullname;
		},
	},
};

console.log("ex3 -", obj.prop.getFullname());
//aqui retorna 'nome sobrenome'
var test = obj.prop.getFullname;

console.log("ex3 -", test());
// undefined, faltou a invocação do getFullName "()" e não precis dai invocar o test(), apenas chamar a variável

// 4) O que sairá no console neste exemplo a seguir:

var a = 1;
    function b() {
        a = 10;
        return;
        function a() {}
}
b();
console.log(a);
//1, pq o 10 é só dentro da função b e qnd o b é invocado ele não é chamado