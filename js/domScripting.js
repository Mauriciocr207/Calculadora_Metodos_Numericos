import { Funcion } from "./funcion/createFunction.js";
import { Biseccion, FalsaPosicion, NewtonRaphson, Tartaglia_Cardano } from "./units/unidad2.js";
import { Gauss_Jordan, Jacobi, Gauss_Siedel, Montante } from "./units/unidad3.js";

const numbers = [
    [4, -1, 1, 3],
    [-1, 4, 1, -2],
    [2, 1, 5, 3]
]
// console.log(Gauss_Siedel(numbers, 0.001).modificaciones);
// console.log(Jacobi(numbers, 0.001).modificaciones);
// console.log(Montante(numbers));
// console.log(Tartaglia_Cardano({a: 1, b: -9, c: 14, d: 24}));

