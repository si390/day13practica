let misDatos = {
    nombre: 'Gaspar',
    apellido: 'de Cristobal',
    dni: 45753076,
    comidadfavoritas:['milanesa', 'fideos', 'pasteldepapa'
    ],
    age: 19,
    saludar: function(){
        return 'Hola mi nombre es'+ this.nombre + 'y tengo' + this.age + 'años. Mi primer comida favorita es' 
    }
}

let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: '2021',
    color: 'gris',
    posicion: 0,
    avanzar: function(n) {
        this.posicion = this.posicion + n;
        return 'La posicion es' + this.posicion;
    }
}

console.log(auto.avanzar(3))
console.log(auto.avanzar(2))