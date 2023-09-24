
//le pido al objeto global de JS que al cargar la página ejecute la funcion "añadirCarrito()"
window.onload = () => {
    añadirCarrito();
}

let añadirCarrito = () => {

    let cardCarrito = document.getElementsByClassName('card');
    console.log(cardCarrito)
    
    //Limpiamos los datos de la tabla
    tabla.innerHTML = '';

    //Creamos una variable para los datos convertidos
    let misProductos = JSON.parse(localStorage.get('Productos', misProductos));

    for(let i = 0; i < misProductos.length; i++){
        
        //Creamos los elementos de la tabla
        let fila = document.createElement('tr');
        let celdaNombre = document.createElement('td');
        let celdaPrecio = document.createElement('td');
        let celdaStock = document.createElement('td');

        //Obtenemos los textos cargados por los usuarios en el formulario
        celdaNombre.textContent = listaProductos[i].nombre; 
        celdaPrecio.textContent = listaProductos[i].precio; 
        celdaStock.textContent = listaProductos[i].stock; 

        //Se agregan los elementos a la tabla
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaStock);

        tabla.appendChild(fila);
    }
}