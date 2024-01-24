const h1= document.querySelector('h1');
const form= document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#botonCalcular');
const result = document.querySelector('#result');

boton.addEventListener('submit', sumarInputs);

function sumarInputs(event){
    event.preventdefault();
    const sumaInput = input1.value + input2.value;
    result.innerText = "resultado " + sumaInput;
}


