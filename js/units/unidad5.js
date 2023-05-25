import { Funcion } from "../funcion/createFunction.js";

// DERIVADAS
function DerivadaPorLimites(f = "", x, tol) {
    const funcion = new Funcion(f);
    let n = 1
    let da = math.pow(10,10);
    let d;
    let e = 100;
    while(e > tol) {
        const h = math.pow(0.1, n);
        d = (funcion.evaluate(x + h) - funcion.evaluate(x)) / h;
        e = math.abs(da - d);
        da = d;
        n++;
    }
    return d;
}
function DerivadaPorDiferenciasFinitas(x = [], y = [], p0) {
    let tablaDif = [];
    const n = x.length;
    tablaDif.push(y);
    for (let i = 1; i < n; i++) {
        const aux = tablaDif[i-1];
        const aux2 = [];
        for (let j = 0; j < n - i; j++) {
            const value = aux[j+1] - aux[j];
            aux2.push(value);
        }
        tablaDif.push(aux2);
    }
    
    const indices = [];
    for (let i = 0; i < n; i++) {
        indices.push(tablaDif[i][0]);
    }

    const h = x[1] - x[0];

    let funcionArray = [`${indices[0]}`];
    for (let i = 1; i < n; i++) {
        let num = "";
        let den = "";
        for (let j = 0; j < i; j++) {
            num += `(x-${x[j]})`;
            den = `(${h.toFixed(4)})^${j}*${math.factorial(j).toFixed(4)}`
        }
        funcionArray.push(
            `${num}/${den}*${indices[i]}`
        )        
    }
    const funcion = new Funcion(funcionArray.join(" + "));
    const derivative = new Funcion(
        math.derivative(funcion.expresion, "x").toString()
    );
    console.log(derivative.evaluate(p0))
    return derivative.evaluate(p0);
}

// INTEGRALES
function Trapecio(f = "", n, a, b) {
    const h = (b-a)/(n-1);
    const funcion = new Funcion(f);
    const y = [funcion.evaluate(a)];
    for (let i = 0; i < n; i++) {
        y.push(funcion.evaluate(i*h));
    }
    let area = y[0] + y[y.length - 1];
    for (let i = 2; i < n; i++) {
        area += 2 * y[i];
    }
    area *= h/2;
    return area;
}
function Simpson_1_3(f = "", n, a, b) {
    const h = (b-a)/(n-1);
    const funcion = new Funcion(f);
    const y = [funcion.evaluate(a)];
    for (let i = 1; i < n; i++) {
        y.push(funcion.evaluate(i*h));
    }
    let area = y[0] + y[y.length - 1];
    for (let i = 2; i < n-1; i+=2) {
        area += 4 * y[i];
    }
    for (let i = 3; i < n-2; i+=2) {
        area += 2 * y[i];
    }
    area *= h/3;
    return area;
}
function Simpson_3_8(f = "", n, a, b) {
    const h = (b-a)/(n-1);
    const funcion = new Funcion(f);
    const y = [funcion.evaluate(a)];
    for (let i = 1; i < n; i++) {
        y.push(funcion.evaluate(i*h));
    }
    let area = y[0] + y[y.length - 1];
    for (let i = 2; i < n - 1; i++) {
        if( (i-1) % 3 == 0) {
            area += 2*y[i];
        } else {
            area += 3*y[i];
        }
        
    }
    area = 3 * area * h/8;
    return area;
}
export {DerivadaPorLimites, DerivadaPorDiferenciasFinitas, Trapecio, Simpson_1_3, Simpson_3_8}