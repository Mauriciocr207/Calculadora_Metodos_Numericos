import { Funcion } from "./funcion/createFunction.js";
import { Biseccion, FalsaPosicion, NewtonRaphson, Tartaglia_Cardano, Ferrari, Birge_Vieta } from "./units/unidad2.js";
import { Gauss_Jordan, Jacobi, Gauss_Siedel, Montante } from "./units/unidad3.js";
import { InterpolacionNewton, InterpolacionLagrange } from "./units/unidad4.js";
import { DerivadaPorLimites, DerivadaPorDiferenciasFinitas, Trapecio, Simpson_1_3, Simpson_3_8} from "./units/unidad5.js";


function domBiseccion() {
    const funcion = document.querySelector('.Biseccion .funcion');
    const inferior = document.querySelector('.Biseccion .inf');
    const superior = document.querySelector('.Biseccion .sup');
    const tolerancia = document.querySelector('.Biseccion .tol');
    const button = document.querySelector('.Biseccion .button');
    const result = document.querySelector('.Biseccion .result');
    button.addEventListener('click', () => {
        const f = funcion.value.trim();
        const sup = superior.value.trim();
        const inf = inferior.value.trim();
        const tol = tolerancia.value.trim();
        
        if(result.hasChildNodes()) {
            result.removeChild(result.childNodes[0]);
        } 
        const box = document.createElement('DIV');
        let res;
        if(f + sup + inf + tol != "") {
            res = Biseccion(parseInt(inf), parseInt(sup), f, parseInt(tol));
            console.log(res);
            const raizDom = document.createElement('DIV');
            raizDom.classList.add('raiz');
            raizDom.textContent = `Raiz: ${res.raiz}`;
            box.appendChild(raizDom);
            const results = document.createElement('DIV');
            results.classList.add('results');
            res.results.forEach( e => {
                const box = document.createElement('DIV');
                box.textContent = `x_l: ${e.x_l} x_u: ${e.x_u} x_r: ${e.x_r} e_a: ${e.e_a}`;
                results.appendChild(box);
            });
            box.appendChild(results);
        }
        result.appendChild(box);
    })
}
function domFalsaPosicion() {
    const funcion = document.querySelector('.FalsaPosicion .funcion');
    const inferior = document.querySelector('.FalsaPosicion .inf');
    const superior = document.querySelector('.FalsaPosicion .sup');
    const tolerancia = document.querySelector('.FalsaPosicion .tol');
    const button = document.querySelector('.FalsaPosicion .button');
    const result = document.querySelector('.FalsaPosicion .result');
    button.addEventListener('click', () => {
        const f = funcion.value.trim();
        const sup = superior.value.trim();
        const inf = inferior.value.trim();
        const tol = tolerancia.value.trim();
        
        if(result.hasChildNodes()) {
            result.removeChild(result.childNodes[0]);
        } 
        const box = document.createElement('DIV');
        let res;
        if(f + sup + inf + tol != "") {
            res = FalsaPosicion(parseInt(inf), parseInt(sup), f, parseInt(tol));
            console.log(res);
            const raizDom = document.createElement('DIV');
            raizDom.classList.add('raiz');
            raizDom.textContent = `Raiz: ${res.raiz}`;
            box.appendChild(raizDom);
            const results = document.createElement('DIV');
            results.classList.add('results');
            res.results.forEach( e => {
                const box = document.createElement('DIV');
                box.textContent = `x_l: ${e.x_l} x_u: ${e.x_u} x_r: ${e.x_r} e_a: ${e.e_a}`;
                results.appendChild(box);
            });
            box.appendChild(results);
        }
        result.appendChild(box);
    })
}

function domScripting() {
    domBiseccion();
    domFalsaPosicion();
}

export {domScripting};


