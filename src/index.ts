let nota, suma, promedio, contador: number;
suma = 0;

for (contador = 1; contador < 11; contador++) {
  nota = Number(prompt("Ingrese la nota" + " " + contador));
  suma = suma + nota;
}

promedio = suma / 10;

console.log("El promedio de notas es: " + promedio);
