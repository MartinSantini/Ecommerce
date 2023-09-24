const buscarProductos = () => {
    let buscar = document.getElementById('search').value;
    console.log(buscar)
}

const clic = () => {
    let texto = document.getElementById('valor');
    // console.log(texto.innerText);

    // texto.innerText = 'Soy un nuevo texto';
    // console.log(texto.innerText);

    texto.innerHTML = `<img src="https://gdb.voanews.com/022a0000-0aff-0242-f948-08dae3508509_w1597_n_r1_st_s.jpg">`
}