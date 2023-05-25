import { Funcion } from "./funcion/createFunction.js";
import { Biseccion, FalsaPosicion, NewtonRaphson, Tartaglia_Cardano, Ferrari, Birge_Vieta } from "./units/unidad2.js";
import { Gauss_Jordan, Jacobi, Gauss_Siedel, Montante } from "./units/unidad3.js";
import { InterpolacionNewton, InterpolacionLagrange } from "./units/unidad4.js";
import { DerivadaPorLimites, DerivadaPorDiferenciasFinitas, Trapecio, Simpson_1_3, Simpson_3_8} from "./units/unidad5.js";

// Ecuaciones Trascendentales
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
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
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
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
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
function domNewtonRaphson() {
    const funcion = document.querySelector('.NewtonRaphson .funcion');
    const inicial = document.querySelector('.NewtonRaphson .inicial');
    const iteraciones = document.querySelector('.NewtonRaphson .iter');
    const tolerancia = document.querySelector('.NewtonRaphson .tol');
    const button = document.querySelector('.NewtonRaphson .button');
    const result = document.querySelector('.NewtonRaphson .result');
    button.addEventListener('click', () => {
        const f = funcion.value.trim();
        const xi = inicial.value.trim();
        const iter = iteraciones.value.trim();
        const tol = tolerancia.value.trim();
        
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        const box = document.createElement('DIV');
        let res;
        if(f + xi + iter + tol != "") {
            res = NewtonRaphson(parseInt(xi), f, parseInt(tol), parseInt(iter));
            console.log(res);
            const raizDom = document.createElement('DIV');
            raizDom.classList.add('raiz');
            raizDom.textContent = `Raiz: ${res.x_r}`;
            box.appendChild(raizDom);
            const results = document.createElement('DIV');
            results.classList.add('results');
            res.results.forEach( e => {
                const box = document.createElement('DIV');
                box.textContent = `x_r: ${e.x_r} f(x_r): ${e.f_xr}  e_a: ${e.e_a}`;
                results.appendChild(box);
            });
            box.appendChild(results);
        }
        result.appendChild(box);
    })
}
// Ecuaciones polinomiales
function domTartaglia() {
    const A = document.querySelector('.Tartaglia .a');
    const B = document.querySelector('.Tartaglia .b');
    const C = document.querySelector('.Tartaglia .c');
    const D = document.querySelector('.Tartaglia .d');
    const button = document.querySelector('.Tartaglia .button');
    const result = document.querySelector('.Tartaglia .result');
    button.addEventListener('click', () => {
        const a = A.value.trim();
        const b = B.value.trim();
        const c = C.value.trim();
        const d = D.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        const box = document.createElement('DIV');
        let res;
        if(a+b+c+d != "") {
            res = Tartaglia_Cardano({
                a: parseInt(a),
                b: parseInt(b),
                c: parseInt(c),
                d: parseInt(d)
            });
            console.log(res);
            const raizDom = document.createElement('DIV');
            raizDom.classList.add('raiz');
            raizDom.textContent = `Raices: x_1: ${res.x1},  x_2: ${res.x2},  x_3: ${res.x3}`;
            box.appendChild(raizDom);
        }
        result.appendChild(box);
    });
}
function domFerrari() {
    const A = document.querySelector('.Ferrari .a');
    const B = document.querySelector('.Ferrari .b');
    const C = document.querySelector('.Ferrari .c');
    const D = document.querySelector('.Ferrari .d');
    const E = document.querySelector('.Ferrari .e');
    const button = document.querySelector('.Ferrari .button');
    const result = document.querySelector('.Ferrari .result');
    button.addEventListener('click', () => {
        const a = A.value.trim();
        const b = B.value.trim();
        const c = C.value.trim();
        const d = D.value.trim();
        const e = E.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        const box = document.createElement('DIV');
        let res;
        if(a+b+c+d != "") {
            res = Ferrari({
                a: parseInt(a),
                b: parseInt(b),
                c: parseInt(c),
                d: parseInt(d),
                e: parseInt(e),
            });
            console.log(res);
            const raizDom = document.createElement('DIV');
            raizDom.classList.add('raiz');
            raizDom.textContent = `Raices: x_1: ${isNaN(res.y1) ? 'complex' : res.y1},  x_2: ${isNaN(res.y2) ? 'complex' : res.y2},  x_3: ${isNaN(res.y3) ? 'complex' : res.y3}, x_4: ${isNaN(res.y4) ? 'complex' : res.y4}`;
            box.appendChild(raizDom);
        }
        result.appendChild(box);
    });
}
function domBirgeVieta() {
    const polinomio = document.querySelector('.BirgeVieta .pol');
    const inicial = document.querySelector('.BirgeVieta .inicial');
    const iteraciones = document.querySelector('.BirgeVieta .iter');
    const tolerancia = document.querySelector('.BirgeVieta .tol');
    const button = document.querySelector('.BirgeVieta .button');
    const result = document.querySelector('.BirgeVieta .result');
    button.addEventListener('click', () => {
        const pol = polinomio.value.trim();
        const xi = inicial.value.trim();
        const iter = iteraciones.value.trim();
        const tol = tolerancia.value.trim();
        
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        const box = document.createElement('DIV');
        let res;
        if(pol + xi + iter + tol != "") {
            res = Birge_Vieta(pol, parseInt(xi), parseInt(tol), parseInt(iter));
            console.log(res);
            const raizDom = document.createElement('DIV');
            raizDom.classList.add('raiz');
            raizDom.textContent = `Raices: `;
            box.appendChild(raizDom);
            const results = document.createElement('DIV');
            results.classList.add('results');
            res.forEach( (e,i) => {
                const box = document.createElement('DIV');
                box.textContent = `x_${i}: ${e}`;
                results.appendChild(box);
            });
            box.appendChild(results);
        }
        result.appendChild(box);
    })
}
// Sistemas de ecuaciones
function domGaussJordan() {
    const Matriz = document.querySelector('.GaussJordan .matriz');
    const Vector_respuesta = document.querySelector('.GaussJordan .vector_respuesta');
    const button = document.querySelector('.GaussJordan .button');
    const result = document.querySelector('.GaussJordan .result');
    button.addEventListener('click', () => {
        const textoMatriz = Matriz.value.trim();
        const textoVectorRespuesta = Vector_respuesta.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        if(textoMatriz != "") {
            const matriz = JSON.parse("["+textoMatriz+"]");
            const vector_respuesta = JSON.parse(textoVectorRespuesta);
            const matrizAmpliada = matriz;
            matrizAmpliada.forEach( (e,i) => {
                e.push(vector_respuesta[i]);
            }) 
            const res = Gauss_Jordan(matrizAmpliada);
            console.log(res);
            // Caja Vector respuesta
            const vectorRespuestaBox = document.createElement('DIV');
            vectorRespuestaBox.classList.add('vectorRespuesta');
            const titulo1 = document.createElement("H4");
            titulo1.textContent = "Soluciones:";
            vectorRespuestaBox.appendChild(titulo1);
            res.vector_respuesta.forEach( (e, i) => {
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                box.textContent = `x_${i}: ${e}`;
                vectorRespuestaBox.appendChild(box);
            }) ;
            // Caja Proceso
            const proceso = document.createElement("DIV");
            proceso.classList.add("proceso");
            const titulo2 = document.createElement("H4");
            titulo2.textContent = "Proceso:";
            proceso.appendChild(titulo2);
            res.modificaciones.forEach( (e,i) => {
                // Creeamos la caja de la matriz
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                // Titulo
                const titulo = document.createElement("H4");
                titulo.textContent = `Iteracion: ${i}`;
                box.appendChild(titulo);
                // matriz
                const matriz = document.createElement("DIV");
                box.appendChild(matriz);
                e.forEach( e => {
                    const submatriz = document.createElement("DIV");
                    submatriz.textContent = `[${e}]`;
                    matriz.appendChild(submatriz);
                })
                proceso.appendChild(box);
            } );

            result.appendChild(vectorRespuestaBox);
            result.appendChild(proceso);
            
        }
    });
}
function domJacobi() {
    const Matriz = document.querySelector('.Jacobi .matriz');
    const Vector_respuesta = document.querySelector('.Jacobi .vector_respuesta');
    const tolerancia = document.querySelector('.Jacobi .tol');
    const button = document.querySelector('.Jacobi .button');
    const result = document.querySelector('.Jacobi .result');
    button.addEventListener('click', () => {
        const textoMatriz = Matriz.value.trim();
        const textoVectorRespuesta = Vector_respuesta.value.trim();
        const tol = tolerancia.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        if(textoMatriz != "") {
            const matriz = JSON.parse("["+textoMatriz+"]");
            const vector_respuesta = JSON.parse(textoVectorRespuesta);
            const matrizAmpliada = matriz;
            matrizAmpliada.forEach( (e,i) => {
                e.push(vector_respuesta[i]);
            }) 
            const res = Jacobi(matrizAmpliada, parseInt(tol));
            console.log(res);
            // Caja Vector respuesta
            const vectorRespuestaBox = document.createElement('DIV');
            vectorRespuestaBox.classList.add('vectorRespuesta');
            const titulo1 = document.createElement("H4");
            titulo1.textContent = "Soluciones:";
            vectorRespuestaBox.appendChild(titulo1);
            res.modificaciones[res.modificaciones.length - 1].forEach( (e, i) => {
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                box.textContent = `x_${i}: ${e}`;
                vectorRespuestaBox.appendChild(box);
            }) ;
            // Caja Proceso
            const proceso = document.createElement("DIV");
            proceso.classList.add("proceso");
            const titulo2 = document.createElement("H4");
            titulo2.textContent = "Proceso:";
            proceso.appendChild(titulo2);
            res.modificaciones.forEach( (e,i) => {
                // Creeamos la caja de la matriz
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                // Titulo
                const titulo = document.createElement("H4");
                titulo.textContent = `Iteracion: ${i}`;
                box.appendChild(titulo);
                // matriz
                const matriz = document.createElement("DIV");
                box.appendChild(matriz);
                e.forEach( e => {
                    const submatriz = document.createElement("DIV");
                    submatriz.textContent = `[${e}]`;
                    matriz.appendChild(submatriz);
                })
                proceso.appendChild(box);
            } );

            result.appendChild(vectorRespuestaBox);
            result.appendChild(proceso);
            
        }
    });
}
function domGaussSiedel() {
    const Matriz = document.querySelector('.GaussSiedel .matriz');
    const Vector_respuesta = document.querySelector('.GaussSiedel .vector_respuesta');
    const tolerancia = document.querySelector('.GaussSiedel .tol');
    const button = document.querySelector('.GaussSiedel .button');
    const result = document.querySelector('.GaussSiedel .result');
    button.addEventListener('click', () => {
        const textoMatriz = Matriz.value.trim();
        const textoVectorRespuesta = Vector_respuesta.value.trim();
        const tol = tolerancia.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }  
        } 
        if(textoMatriz != "") {
            const matriz = JSON.parse("["+textoMatriz+"]");
            const vector_respuesta = JSON.parse(textoVectorRespuesta);
            const matrizAmpliada = matriz;
            matrizAmpliada.forEach( (e,i) => {
                e.push(vector_respuesta[i]);
            }) 
            const res = Gauss_Siedel(matrizAmpliada, parseInt(tol));
            console.log(res);
            // Caja Vector respuesta
            const vectorRespuestaBox = document.createElement('DIV');
            vectorRespuestaBox.classList.add('vectorRespuesta');
            const titulo1 = document.createElement("H4");
            titulo1.textContent = "Soluciones:";
            vectorRespuestaBox.appendChild(titulo1);
            res.modificaciones[res.modificaciones.length - 1].forEach( (e, i) => {
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                box.textContent = `x_${i}: ${e}`;
                vectorRespuestaBox.appendChild(box);
            }) ;
            // Caja Proceso
            const proceso = document.createElement("DIV");
            proceso.classList.add("proceso");
            const titulo2 = document.createElement("H4");
            titulo2.textContent = "Proceso:";
            proceso.appendChild(titulo2);
            res.modificaciones.forEach( (e,i) => {
                // Creeamos la caja de la matriz
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                // Titulo
                const titulo = document.createElement("H4");
                titulo.textContent = `Iteracion: ${i}`;
                box.appendChild(titulo);
                // matriz
                const matriz = document.createElement("DIV");
                box.appendChild(matriz);
                e.forEach( e => {
                    const submatriz = document.createElement("DIV");
                    submatriz.textContent = `[${e}]`;
                    matriz.appendChild(submatriz);
                })
                proceso.appendChild(box);
            } );

            result.appendChild(vectorRespuestaBox);
            result.appendChild(proceso);
            
        }
    });
}
function domMontante() {
    const Matriz = document.querySelector('.Montante .matriz');
    const Vector_respuesta = document.querySelector('.Montante .vector_respuesta');
    const button = document.querySelector('.Montante .button');
    const result = document.querySelector('.Montante .result');
    button.addEventListener('click', () => {
        const textoMatriz = Matriz.value.trim();
        const textoVectorRespuesta = Vector_respuesta.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(textoMatriz != "") {
            const matriz = JSON.parse("["+textoMatriz+"]");
            const vector_respuesta = JSON.parse(textoVectorRespuesta);
            const matrizAmpliada = matriz;
            matrizAmpliada.forEach( (e,i) => {
                e.push(vector_respuesta[i]);
            }) 
            const res = Montante(matrizAmpliada);
            console.log(res);
            // Caja Vector respuesta
            const vectorRespuestaBox = document.createElement('DIV');
            vectorRespuestaBox.classList.add('vectorRespuesta');
            const titulo1 = document.createElement("H4");
            titulo1.textContent = "Soluciones:";
            vectorRespuestaBox.appendChild(titulo1);
            res.vector_respuesta.forEach( (e, i) => {
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                box.textContent = `x_${i}: ${e}`;
                vectorRespuestaBox.appendChild(box);
            }) ;
            // Caja Proceso
            const proceso = document.createElement("DIV");
            proceso.classList.add("proceso");
            const titulo2 = document.createElement("H4");
            titulo2.textContent = "Proceso:";
            proceso.appendChild(titulo2);
            res.modificaciones.forEach( (e,i) => {
                // Creeamos la caja de la matriz
                const box = document.createElement('DIV');
                box.classList.add("soluciones")
                // Titulo
                const titulo = document.createElement("H4");
                titulo.textContent = `Iteracion: ${i}`;
                box.appendChild(titulo);
                // matriz
                const matriz = document.createElement("DIV");
                box.appendChild(matriz);
                e.forEach( e => {
                    const submatriz = document.createElement("DIV");
                    submatriz.textContent = `[${e}]`;
                    matriz.appendChild(submatriz);
                })
                proceso.appendChild(box);
            } );

            result.appendChild(vectorRespuestaBox);
            result.appendChild(proceso);
            
        }
    });
}
// Interpolación
function domInterpolacionNewton() {
    const X = document.querySelector('.InterpolacionNewton .x');
    const P0 = document.querySelector('.InterpolacionNewton .p0');
    const F = document.querySelector('.InterpolacionNewton .f');
    const button = document.querySelector('.InterpolacionNewton .button');
    const result = document.querySelector('.InterpolacionNewton .result');
    button.addEventListener('click', () => {
        const x  = X.value.trim();
        const f = F.value.trim();
        const p0 = P0.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(x+f != "") {
            const xDatos = JSON.parse("["+x+"]");
            const fDatos = JSON.parse("["+f+"]");
            const res = InterpolacionNewton(xDatos, fDatos, parseFloat(p0));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> f(${p0}) = ${res}`;
            result.append(respuesta);
        }
    })
}
function domInterpolacionLagrange() {
    const X = document.querySelector('.InterpolacionLagrange .x');
    const P0 = document.querySelector('.InterpolacionLagrange .p0');
    const F = document.querySelector('.InterpolacionLagrange .f');
    const button = document.querySelector('.InterpolacionLagrange .button');
    const result = document.querySelector('.InterpolacionLagrange .result');
    button.addEventListener('click', () => {
        const x  = X.value.trim();
        const f = F.value.trim();
        const p0 = P0.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(x+f != "") {
            const xDatos = JSON.parse("["+x+"]");
            const fDatos = JSON.parse("["+f+"]");
            const res = InterpolacionLagrange(xDatos, fDatos, parseFloat(p0));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> f(${p0}) = ${res}`;
            result.append(respuesta);
        }
    })
}
// Diferenciación
function domDerivacionPorLimites() {
    const F = document.querySelector('.Limite .f');
    const X = document.querySelector('.Limite .x');
    const tolerancia = document.querySelector('.Limite .tol');
    const button = document.querySelector('.Limite .button');
    const result = document.querySelector('.Limite .result');
    button.addEventListener('click', () => {
        const x  = X.value.trim();
        const f = F.value.trim();
        const tol = tolerancia.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(x+f != "") {
            const res = DerivadaPorLimites(f, parseFloat(x), parseFloat(tol));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> f'(${x}) = ${res}`;
            result.append(respuesta);
        }
    })
}
function domDerivacionPorDiferenciasFinitas() {
    const F = document.querySelector('.DiferenciasFinitas .f');
    const X = document.querySelector('.DiferenciasFinitas .x');
    const P0 = document.querySelector('.DiferenciasFinitas .p0');
    const button = document.querySelector('.DiferenciasFinitas .button');
    const result = document.querySelector('.DiferenciasFinitas .result');
    button.addEventListener('click', () => {
        const x  = X.value.trim();
        const f = F.value.trim();
        const p0 = P0.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(x+f != "") {
            const xData = JSON.parse("["+x+"]");
            const fData = JSON.parse("["+f+"]");
            const res = DerivadaPorDiferenciasFinitas(xData, fData, parseFloat(p0));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> f'(${x}) = ${res}`;
            result.append(respuesta);
        }
    })
}
// Integración
function domTrapecio() {
    const F = document.querySelector('.Trapecio .f');
    const N = document.querySelector('.Trapecio .n');
    const A = document.querySelector('.Trapecio .a');
    const B = document.querySelector('.Trapecio .b');
    const button = document.querySelector('.Trapecio .button');
    const result = document.querySelector('.Trapecio .result');
    button.addEventListener('click', () => {
        const f = F.value.trim();
        const n = N.value.trim();
        const a = A.value.trim();
        const b = B.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(f+n+a+b != "") {
            const res = Trapecio(f, parseFloat(n), parseFloat(a), parseFloat(b));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> Integral_f(x)[${a},${b}] ==> ${res}`;
            result.append(respuesta);
        }
    })
}
function domSimpson13() {
    const F = document.querySelector('.Simpson13 .f');
    const N = document.querySelector('.Simpson13 .n');
    const A = document.querySelector('.Simpson13 .a');
    const B = document.querySelector('.Simpson13 .b');
    const button = document.querySelector('.Simpson13 .button');
    const result = document.querySelector('.Simpson13 .result');
    button.addEventListener('click', () => {
        const f = F.value.trim();
        const n = N.value.trim();
        const a = A.value.trim();
        const b = B.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(f+n+a+b != "") {
            const res = Simpson_1_3(f, parseFloat(n), parseFloat(a), parseFloat(b));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> Integral_f(x)[${a},${b}] ==> ${res}`;
            result.append(respuesta);
        }
    })
}
function domSimpson38() {
    const F = document.querySelector('.Simpson38 .f');
    const N = document.querySelector('.Simpson38 .n');
    const A = document.querySelector('.Simpson38 .a');
    const B = document.querySelector('.Simpson38 .b');
    const button = document.querySelector('.Simpson38 .button');
    const result = document.querySelector('.Simpson38 .result');
    button.addEventListener('click', () => {
        const f = F.value.trim();
        const n = N.value.trim();
        const a = A.value.trim();
        const b = B.value.trim();
        if(result.hasChildNodes()) {
            while(result.hasChildNodes()) {
                result.remove(result.firstChild);
            }           
        } 
        if(f+n+a+b != "") {
            const res = Simpson_3_8(f, parseFloat(n), parseFloat(a), parseFloat(b));
            console.log(res);
            const respuesta = document.createElement("DIV");
            respuesta.textContent = `Respuesta ==> Integral_f(x)[${a},${b}] ==> ${res}`;
            result.append(respuesta);
        }
    })
}


function domScripting() {
    domBiseccion();
    domFalsaPosicion();
    domNewtonRaphson();
    domTartaglia();
    domFerrari();
    domBirgeVieta();
    domGaussJordan();
    domJacobi();
    domGaussSiedel();
    domMontante();
    domInterpolacionNewton();
    domInterpolacionLagrange();
    domDerivacionPorLimites();
    domDerivacionPorDiferenciasFinitas();
    domTrapecio();
    domSimpson13();
    domSimpson38();

}

export {domScripting};


