//Variables
const selectAnios = document.getElementById('anio');
const anio = document.getElementById('anio');
const tipo = document.querySelector('input[name="tipo"]:checked').value;//leer el valor del que fue seleccionado
const marca = document.getElementById('marca');
const formulario = document.getElementById('cotizar-seguro');




//EventListener


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Mostrar la marca seleccionada
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;//esto devuelve el valor que fue seleccionado

    console.log(marcaSeleccionada);

    //Mostrar el año seleccionado 
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    
    console.log(anioSeleccionado);


    //leer el valor del radiobutton
    console.log(tipo);

    //crear instancia de interfaz
    const interfaz = new Interfaz();


//Comprobar que los campos no estén vacios
if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
    //imprimir error
    alert('Faltan Datos');
}else{
    //Instanciar seguro y mostrar interfaz
    alert('Todo correcto');
}

})






//Funciones

//Definiendo el año actual como limite
const max = new Date().getFullYear(),
    min = max - 20; //El año minimo


    for(i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
    
        selectAnios.appendChild(option);
    }






//constructor para seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


//todo lo que se muestra

function Interfaz(){
    //Inicia vacio
}







