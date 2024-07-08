// JavaScript Document
 document.getElementById('mostrar').addEventListener('click', function() {
 const min = parseInt(document.getElementById('min').value);
 const max = parseInt(document.getElementById('max').value);
 function generarNumeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function generarNumerosAleatorios(cantidad, min, max) {
 let numeros = [];
let i = 0;
 do {
 numeros[i] = generarNumeroAleatorio(min, max);
 i++;
  } while (i < cantidad);
return numeros;
 }
 const numerosAleatorios = generarNumerosAleatorios(20, min, max);
 const numberList = document.getElementById('lista');
 numberList.innerHTML = '';
numerosAleatorios.forEach((numero, index) => {
const listItem = document.createElement('li');
listItem.textContent = `${index + 1}. ${numero}`;
 numberList.appendChild(listItem);
 });
 });
document.getElementById('mostrar').addEventListener('click', function() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
 function generarNumeroAleatorio(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
 } 
function generarNumerosAleatorios(cantidad, min, max) {
 let numeros = [];
  let i = 0;
   do {
 numeros[i] = generarNumeroAleatorio(min, max);
i++;
  } while (i < cantidad);
return numeros;
 }
   const numerosAleatorios = generarNumerosAleatorios(20, min, max);
  const numberList = document.getElementById('lista');
  numberList.innerHTML = '';
   numerosAleatorios.forEach((numero, index) => {
   const listItem = document.createElement('li');
  listItem.textContent = `${index + 1}. ${numero}`;
 numberList.appendChild(listItem);
 });
 });
