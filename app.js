let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora del desafio';


function botonClicado() {
    console.log('El botón fue clicado');
}

function ciudad () {
    let pais = ("Argentina");
    let nombreCiudad = prompt(`indique el nombre de una ciudad de ${pais}`);
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);
}

function amo () {
    alert('Yo amo a JS');
}

function suma () {
    let primerNumero = parseInt(prompt('Indique un numero por favor'));
    console.log(primerNumero)
    let segundoNumero = parseInt(prompt ('Indique el segundo numero'));
    console.log(segundoNumero);
    let numeroFinal = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${numeroFinal}`);
}