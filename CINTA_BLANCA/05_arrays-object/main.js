
//arreglos nos permite almacenar diferentes valores


var colores = ["blanco", "azul", "verde","amarillo"]

//forma viejita
colores[4] = "verde"



//metodo de arreglos

//.push() indica que vamos a subir un valor a nuestro arreglo en la ultima posición.


colores.push("gris", "beige")


//.pop() borra siempre nuestro ultimo elemento, si lo pones varias veces, se borran los anteriores elementos.

colores.pop()


//console.log (colores)
//console.log(colores[2])

//.splice Borra elementos especificos, primero dice la posición y luego cuantos elementos quieres borrar.

colores.splice (2, 1)

//para sustituir por violeta el valor azul.
colores.splice(1,1,"violeta") 

//console.log (colores)

//OBJETOS
//tienen dos propiedades key y value
var persona = {

    nombre: 'Ricardo',
    cel: '45645647894',
    direccion: 'CDMX',
    email: 'kelebra@devf.mx',
    password: '123456',
    musica: ['rock', 'corridos tumbados', 'cumbia', 'pop', 'k-pop', 'trap'],
    peliculas : {
        accion: ['R&F', 'MI', 'El trasportador'],
        survivalHorror:['Chuky', 'blair wich', 'El exorsista'],
        comedia: ['This is my son','scary movie', 'click' ],
        romanticas: {
            comediasRomanticas: ['La propuesta', 'Zohan'],
            tristeza: ['Titanic', 'Robando a la novia', 'Cartas a Jhon']
        }
    }

}

console.log(persona)
console.log(persona.nombre)
console.log(persona.password)
console.log(persona.musica[1])
console.log(persona.peliculas.romanticas.comediasRomanticas[1])

//se puede poner numeros de tipo texto, pero pueden ser de las dos maneras. 
//y esto lo puedo subir a una base de Datos. como archivo en json