import { Funcion } from "./funcion/createFunction.js";
import { Biseccion, FalsaPosicion, NewtonRaphson, Tartaglia_Cardano, Ferrari, Birge_Vieta } from "./units/unidad2.js";
import { Gauss_Jordan, Jacobi, Gauss_Siedel, Montante } from "./units/unidad3.js";
import { InterpolacionNewton, InterpolacionLagrange } from "./units/unidad4.js";
import { DerivadaPorLimites, DerivadaPorDiferenciasFinitas, Trapecio, Simpson_1_3, Simpson_3_8} from "./units/unidad5.js";


 console.log(InterpolacionNewton([1,1.5,2,2.5], [1, 1.6487, 2.7182, 7.3891], 1.7));



