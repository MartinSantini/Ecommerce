let listaProductos = [];

let agregarProducto = () => {
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let cantStock = document.getElementById('stock').value;
    
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        stock: cantStock
    }

    listaProductos.push(producto);

    
    let tabla = document.getElementById('miTabla');
    
    //Limpiamos los datos de la tabla
    tabla.innerHTML = '';

    //Creamos una variable para los datos guardados
    let misProductos = JSON.stringify(listaProductos);
    console.log(misProductos);
    
    //Seteamos el local storage
    localStorage.setItem('Productos', misProductos);

    for(let i = 0; i < listaProductos.length; i++){
        
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
    
    let nroProductos = listaProductos.length;
    let totalProductos = document.getElementById('totalProductos');
    totalProductos.innerHTML = `<td>${nroProductos}</td>`;
}

// let añadirCarrito = document.addEventListener( 'click', (e) => {
//     console.log(e);
//     let button = document.querySelector('#añadirCarrito');
// })

let borrar = () => {
    localStorage.removeItem('listaProductos');
}