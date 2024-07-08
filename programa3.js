const frutas = ["Platano", "Naranja", "Manzana", "Mango", "Fresa", "Uva", "Granadilla"];
function mostrarFrutas() {
const frutasList = document.getElementById('lista2');
frutasList.innerHTML = '';
frutas.forEach(fruta => {
const li = document.createElement('li');
li.textContent = fruta;
frutasList.appendChild(li);
});
}
document.getElementById('ver').addEventListener('click', mostrarFrutas);
document.getElementById('ordenar').addEventListener('click', function() {
frutas.sort();
mostrarFrutas();
});
document.getElementById('invertir').addEventListener('click', function() {
frutas.reverse();
mostrarFrutas();
});
document.getElementById('longitud').addEventListener('click', function() {
alert(`La longitud del arreglo es: ${frutas.length}`);
});
document.getElementById('insertar').addEventListener('click', function() {
let nuevaFruta;
do {
nuevaFruta = prompt('Ingrese el nombre de la nueva fruta:');
} while (!nuevaFruta);
frutas.push(nuevaFruta);
mostrarFrutas();
});
document.getElementById('eliminar').addEventListener('click', function() {
let frutaAEliminar;
let index;
do {
frutaAEliminar = prompt('Ingrese el nombre de la fruta a eliminar:');
index = frutas.indexOf(frutaAEliminar);
if (index === -1) {
alert('Fruta no encontrada, intente de nuevo.');
}
} while (index === -1);
frutas.splice(index, 1);
mostrarFrutas();
});