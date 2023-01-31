//

//Array.at()
//El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. 
//Los valores negativos contarán desde el último elemento del array.


// Nuestro array con objetos
{const hermanas = ['luisa', 'daniela', 'ana'];

// Una función que devuelve el último elemento de un array dado
function devolverUltimo(arr) {
  return arr.at(-1);
}

// Obtenemos el último elemento de nuestro array 'hermanas'
const objeto1 = devolverUltimo(hermanas);
console.log(objeto1); // Muestra: 'ana'

// Añade un elemento a nuestro array 'hermanas' y también lo devolverá
hermanas.push('monica');
const objeto2 = devolverUltimo(hermanas);
console.log(objeto2); // Muestra: 'monica'
}



// --------------------------------------------------------------------------



//Array.at()
//El metodo concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

{const array1 = ['d', 'a', 'n'];
const array2 = ['i', 'e', 'l'];
const array3 = array1.concat(array2);

console.log(array3);
// Salida esperada: Array ["d", "a", "n", "i", "e", "l"]

//También puede ser:
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

letters.concat(numbers);
// resultado: ['a', 'b', 'c', 1, 2, 3]
}



// --------------------------------------------------------------------------



//Array.copyWithin()
//El método copyWithin() transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), 
//sin modificar su propiedad length y lo devuelve.

{const arrayUno = ['p', 'r', 'i', 'm', 'a'];

// Copy to index 0 the element at index 3
console.log(arrayUno.copyWithin(1, 3, 4));
// Resultado esperado: Array ["p", "m", "i", "m", "a"]

// Copy to index 1 all elements from index 3 to the end
console.log(arrayUno.copyWithin(1, 3));
// Resultado esperado: Array ["p", "m", "a", "m", "a"]
//arr.copyWithin(target)
//arr.copyWithin(target, start)
//arr.copyWithin(target, start, end)
}



// --------------------------------------------------------------------------



//Array.entries
//El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.

{var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
//Resultados esperados:
// [0, 'a']
// [1, 'b']
// [2, 'c']
}



// --------------------------------------------------------------------------



//Array.every()
//Determina si todos los elementos en el array satisfacen una condición.

{ const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Resultado esperado: true
}



// --------------------------------------------------------------------------



//Array.fill()
// El método fill() cambia todos los elementos en un arreglo por un valor estático, 
//desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

{const array1 = [1, 2, 3, 4];

// Llena con 0 desde la posición 2 hasta la posición 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Llena con 5 desde la posición 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// Llena todas las posiciones con 6
console.log(array1.fill(6));
// Resultado esperado: Array [6, 6, 6, 6]
}



// --------------------------------------------------------------------------



// Array.filter()
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

{const words = ['daniela', 'luisa', 'juancarlos', 'monica', 'ana', 'tama', 'hagrid'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Resultado esperado: Array [["daniela", "juancarlos"]]
}



// --------------------------------------------------------------------------



// Array.find()
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// Sin importar si hay más que cumplan con esa condición

{const nombres = ['ana', 'maria', 'jose', 'manuel', 'isabella'];

const found = nombres.find(element => element = 'ana');

console.log(found);
// Resultado esperado: 'ana'
}


// También se puede con:
{const numeros = [5, 12, 8, 130, 44];

const found = numeros.find(element => element > 10);

console.log(found);
// Resultado esperado: 12
}



// --------------------------------------------------------------------------



// Array.findIndex()
// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
//En caso contrario devuelve -1.

{const frutas = ["manzana", "banano", "moraazul", "uva"];

const index = frutas.findIndex(fruta => fruta === "moraazul");

console.log(index); // 3
console.log(frutas[index]); // moraazul
}



// --------------------------------------------------------------------------



// Array.prfindLast()
// El método findLast() itera el array en orden reversivo y devuelve el valor del primer elemento que satisfaga la función de prueba. 
// Si ningún elemento satusface la función de prueba, se deculeve indefinido.

{const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Resultado esperado: 130
}



// --------------------------------------------------------------------------



//Array.findLastIndex()
// El método findLastIndex() itera el array en orden de reversa y devuelve el index del primer elemento que sastisfagan la función dada de testeo. 
// Si no hay elementos que satisfagan la función de testeo, -1 será devuelto.

{const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Resultado esperado: 3
// Index of element with value: 130
}



// --------------------------------------------------------------------------



// Array.flat()
// El método flat()  crea un nuevo array con todos los elementos sub-array concatenados en el recursivamente hasta la profundudad específicada.

{const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Resultado esperado: Array [0, 1, 2, 3, 4]
}

//También puede ser:
{const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Resultado esperado: Array [0, 1, 2, Array [3, 4]]
}



// --------------------------------------------------------------------------



// Array.flatMap()
// Este método retorna un nuevo array formado al aplicar una función de llamado dada a cada elemento para el array, 
// y luego aplanando el resultado en un nivel. Es idéntico a map() seguido de flat() de profundidad 1 (arr.map(...args).flat()), pero un poco más eficiente que llamar a esos dos métodos por separado.

{const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// Resultado esperado: Array [1, 2, 3, 4, 5, 6]
}



// --------------------------------------------------------------------------



// Array.forEach()
// El método forEach() ejecuta un función proveida para cada elemento del array.

{const marcasCarros = [ 'mazda', 'chevrolet', 'mercedes'];

marcasCarros.forEach(element => console.log(element));

// Resultlado esperado: "mazda"
// Resultlado esperado: "chevrolet"
// Resultlado esperado: "mercedes"
}



// --------------------------------------------------------------------------



// Array.from()
// El método estático Array.from() crea una nueva instancia de Array de copia superficial a partir de un objeto iterable o similar a una matriz.

// Array from a String
{Array.from("foo");
// [ "f", "o", "o" ]

// Array from a Set
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

// Array from a Map
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]
  
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  Array.from(mapper.values());
  // ['a', 'b'];
  
  Array.from(mapper.keys());
  // ['1', '2'];

  // Array froma a NodeList
  // Create an array based on a property of DOM Elements
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
}



// --------------------------------------------------------------------------



// Array.join()
// El método join() crea y devuelve una nueva cadena al concatenar todos los elementos en una matriz (o un objeto similar a una matriz), 
//separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.

{const perros = ['pinscher', 'bulldog', 'golden'];

console.log(perros.join());
// Resultado esperado: "pinscher,bulldog,golden"

console.log(perros.join(''));
// Resultado esperado: "pinscherbulldogolden"

console.log(perros.join('-'));
// Resultado esperado: "pinscher-bulldog-golden"

console.log(perros.join('.'));
// Resultado esperado: "pinscher.bulldog.golden"

console.log(perros.join('/.'));
// Resultado esperado: "pinscher/.bulldog/.golden"
}



// --------------------------------------------------------------------------



// Array.keys()
// El método keys() devuelve a nuevo objeto iteradar array que contiene las llaves para cada índice en el array.

{const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Resultado esperado: 0
// Resultado esperado: 1
// Resultado esperado: 2
}



// --------------------------------------------------------------------------



// Array.lastIndexOf()
// El método lastIndexOf() devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.
// La matriz se busca hacia atrás, comenzando en fromIndez.

{const numeros = [2, 5, 9, 2];
    numeros.lastIndexOf(2); // 3
    numeros.lastIndexOf(7); // -1
    numeros.lastIndexOf(2, 3); // 3
    numeros.lastIndexOf(2, 2); // 0
    numeros.lastIndexOf(2, -2); // 0
    numeros.lastIndexOf(2, -1); // 3
}



// --------------------------------------------------------------------------



// Array.map()
// El método map() crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz de llamadas.

{const array1 = [1, 4, 9, 16];

    // Pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]

//También puede ser:
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// rutas ahora:     [1, 2, 3]
// los numeros siguen siendo: [1, 4, 9]
}



// --------------------------------------------------------------------------



// Array.of()
// El método estático Array.of() crea una nueva instancia de Array a partir de un número variable de argumentos, 
//independientemente del número o tipo de argumentos.

//Array.of(element0)
//Array.of(element0, element1)
//Array.of(element0, element1, /* … ,*/ elementN)

{Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
}



// --------------------------------------------------------------------------



// Array.pop()
// El método pop() elimina el último elementode una matriz y devuelve ese elemento. Este método cambia la longitud de la matriz.

{const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
}



// --------------------------------------------------------------------------



// Array.pop()
// El siguiente código crea la matriz myFish que contiene cuatro elementos y luego elimina el último elemento.

{const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
}



// --------------------------------------------------------------------------
  


//Array.push()
// El método push() agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.

{const dias = ['lunes', 'martes', 'miercoles'];

const count = dias.push('jueves');
console.log(count);
// Resultado esperado: 4
console.log(dias);
// Resultado esperado: Array ["lunes", "martes", "miercoles", "jueves"]

dias.push('viernes', 'sabado', 'domingo');
console.log(dias);
// Resultado esperado: Array ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
}



// --------------------------------------------------------------------------



// Array.reduce()

{const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    
    console.log(sumWithInitial);
    // Resultado esperado: 10
}



// --------------------------------------------------------------------------



// Array.reduceRight()

{const array1 = [[0, 'sofia'], [2, 'carlos'], [4, 'valentina']];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);
// Expected output: Array [4, "valentina", 2, "carlos", 0, "sofia"]
}



// --------------------------------------------------------------------------



// Array.reverse()

{const array1 = ['ayer', 'hoy', 'mañana'];
console.log('array1:', array1);
// Resultado esperado: "array1:" Array ["ayer", "hoy", "mañana"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Resultado esperado: "reversed:" Array ["mañana", "hoy", "ayer"]

// El método puede llegar a ser destructivo, cambia el array original.
console.log('array1:', array1);
// Resultado esperado: "array1:" Array ["mañana", "hoy", "ayer"]
}



// --------------------------------------------------------------------------



// Array.shift()

{const numeracion = [10, 50, 45];

    const firstElement = numeracion.shift();
    
    console.log(numeracion);
    // Resultado esperado: Array [50, 45]
    
    console.log(firstElement);
    // Resultado esperado: 10
}



// --------------------------------------------------------------------------



// Array.slice()

{const cosas = ['cartuchera', 'lapiz', 'borrador', 'sacapunta', 'cuaderno'];

console.log(cosas.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(cosas.slice(2, 4));


console.log(cosas.slice(1, 5));


console.log(cosas.slice(-2));


console.log(cosas.slice(2, -1));


console.log(cosas.slice());
}



// --------------------------------------------------------------------------



// Array.some()

{const array = [1, 2, 3, 4, 5];

    // Chequea si el elelmento es par
    const even = (element) => element % 2 === 0;
    
    console.log(array.some(even));
    // Resultado esperado: true
}



// --------------------------------------------------------------------------



// Array.sort()

{const meses = ['diciembre', 'noviembre', 'octubre', 'septiembre'];
meses.sort();
console.log(meses);
// Resultado esperado: Array ["septiembre", "octubre", "noviembre", "diciembre"]

//También puede ser:
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Resultado esperado: Array [1, 100000, 21, 30, 4]
}



// --------------------------------------------------------------------------



// Array.splice()

{const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Resultado esperado: "1,a,12/21/1997, 2:12:00 PM",
// Asume la hora local
}



// --------------------------------------------------------------------------



// Array.toString()

{const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Resultado esperado: "1,2,a,1a"
}



// --------------------------------------------------------------------------



//Array.unshift()

{const array1 = [1, 2, 3];

    console.log(array1.unshift(4, 5));
    // Resultado esperado: 5
    
    console.log(array1);
    // Resultado esperado: Array [4, 5, 1, 2, 3]
}



// --------------------------------------------------------------------------



// Array.values()

{const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Resultado esperado: "a"
// Resultado esperado: "b"
// Resultado esperado: "c"
}