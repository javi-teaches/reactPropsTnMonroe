class SerVivo {
	constructor (nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
		console.log('Se llamó al Constructor SerVivo');
	}
}

class SerHumano extends SerVivo {
	constructor (nombre, edad, nacionalidad) {
		super(nombre, edad);
		this.nacionalidad = nacionalidad;
		console.log('Se llamó al Constructor SerHumano');
	}

	decirNombre () {
		return `Hola, yo me llamo ${this.nombre}`;
	}
}

let Pao = new SerHumano('Pao', 25, 'Argentina');
let Pepinito = new SerHumano('Rey Pepinito', 500, 'Nodeano');

console.log(Pao);
console.log(typeof Pao);
console.log(Pepinito);
console.log(Pao.decirNombre());
