import { Funcion } from "./funcion/createFunction.js";
import { biseccion } from "./units/unidad2.js";
const funcion = '(x-2)^2-1';
const res = biseccion(0,1,funcion,0.01);
console.log(res);
