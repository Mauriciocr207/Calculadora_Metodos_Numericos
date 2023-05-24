import { Funcion } from "../funcion/createFunction.js";
function Gauss_Jordan(arreglo = []) {
    let matriz = arreglo;
    const n = matriz.length;
    const m = n + 1;
    const modificaciones = [];
    const vector_respuesta = [];
    modificaciones.push(JSON.parse(JSON.stringify(matriz)));
    for (let i = 0; i < n; i++) {
        const pivote = matriz[i][i];
        for (let j = 0; j < m; j++) { 
            matriz[i][j] = matriz[i][j] /  pivote;
        }
        for (let k = 0; k < n; k++) {
            if(k != i) {
                const anulador = matriz[k][i];
                for (let j = 0; j < m; j++) {
                    matriz[k][j] = matriz[k][j] -  anulador * matriz[i][j];
                }
            }
        }
        modificaciones.push(JSON.parse(JSON.stringify(matriz)));
    }
    for (let i = 0; i < matriz.length; i++) {
        vector_respuesta.push(JSON.parse(JSON.stringify(matriz[i][matriz[i].length - 1])));
    }
    return {
        modificaciones: modificaciones,
        vector_respuesta: vector_respuesta
    }
}
function Jacobi(arreglo = [], tol) {
    const matriz = arreglo;
    const x = [];
    const n = matriz.length;
    let err = 100;
    const modificaciones = [];
    const errArray = [];
    errArray.push(JSON.parse(JSON.stringify(err)));
    for (let i = 0; i < n; i++) {
        x[i] = 0;
    }
    modificaciones.push(JSON.parse(JSON.stringify(x)));
    while (err > tol) {
        let y = []
        for (let i = 0; i < n; i++) {
            y[i] = matriz[i][n];
            for (let j = 0; j < n; j++) {
                if(i != j) {
                    y[i] -= matriz[i][j] * x[j];
                }
            }
            y[i] /= matriz[i][i];
            err = math.abs(x[i] - y[i]);
        }
        for (let i = 0; i < n; i++) {
            x[i] = y[i];
        }
        modificaciones.push(JSON.parse(JSON.stringify(x)));
        errArray.push(JSON.parse(JSON.stringify(err)));
    }    
    return {
        modificaciones: modificaciones,
        err: errArray
    };
}
function Gauss_Siedel(arreglo = [], tol) {
    const matriz = arreglo;
    const x = [];
    const n = matriz.length;
    let err = 100;
    const modificaciones = [];
    const errArray = [];
    errArray.push(JSON.parse(JSON.stringify(err)));
    for (let i = 0; i < n; i++) {
        x[i] = 0;
    }
    modificaciones.push(JSON.parse(JSON.stringify(x)));
    while (err > tol) {
        let y = []
        for (let i = 0; i < n; i++) {
            y[i] = matriz[i][n];
            for (let j = 0; j < n; j++) {
                if(i != j) {
                    y[i] -= matriz[i][j] * x[j];
                }
            }
            y[i] /= matriz[i][i];
            err = math.abs(x[i] - y[i]);
            x[i] = y[i];
        }
        modificaciones.push(JSON.parse(JSON.stringify(x)));
        errArray.push(JSON.parse(JSON.stringify(err)));
    }    
    return {
        modificaciones: modificaciones,
        err: errArray
    };
}
function Montante(arreglo = []) {
    const matriz = arreglo;
    const n = matriz.length;
    let pivote_ant = 1;
    const modificaciones = [];
    modificaciones.push(JSON.parse(JSON.stringify(matriz)));
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            if(i != k) {
                for (let j = n; j >= 0; j--) {
                    const i_j = matriz[i][j];
                    const k_k = matriz[k][k];
                    const i_k = matriz[i][k];
                    const k_j = matriz[k][j];
                    matriz[i][j] = (i_j * k_k  - i_k * k_j) / pivote_ant;
                }
            }
        }
        pivote_ant = matriz[k][k];
        modificaciones.push(JSON.parse(JSON.stringify(matriz)));
    }
    return {
        modificaciones: modificaciones
    }
}
export { Gauss_Jordan, Jacobi, Gauss_Siedel, Montante };