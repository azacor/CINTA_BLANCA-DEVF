  
// Formulario para pedir pizza,


let nombre = document.getElementById('nombre')
let direccion = document.getElementById('direccion')
let telefono = document.getElementById('telefono')
let pinia = document.getElementById('pinia')


let respuestaNombre = document.getElementById('respuestaNombre')
let respuestaDireccion = document.getElementById('respuestaDireccion')
let respuestaTelefono = document.getElementById('respuestaTelefono')
let respuestaPinia = document.getElementById('respuestaPinia')

// let boton = document.getElementById("buton")
// -Nombre
// -Direccion
// -Telefono
// -Pinia o sin pinia

const enter = () => {

    //Pinta en la etiqueta el valor dado
    // nombre.innerHTML = 'Titulo cambiado desde JS'
    // texto.innerHTML = 'Texto cambiado desde JS'
    
    // // .value es el valor del input, en otras palabras lo que el usuario ingresa
    //     console.log(nombre.value)
    
        respuestaNombre.innerHTML = nombre.value
        respuestaDireccion.innerHTML = direccion.value
        respuestaTelefono.innerHTML = telefono.value
        respuestaPinia.innerHTML = pinia.value



    }
    
    
    // addEventListener escucha los eventos de HTML
    //El primer parametro es el evento
    //Segundo parameto es la funcion que queremos ejecutar
    boton.addEventListener('click', enter)