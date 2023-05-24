import { Funcion } from "../funcion/createFunction.js";
// ECUACIONES TRASCENDENTALES
function Biseccion(inf = 0, sup = 0, f = "", tol = 0) {
    const results = [];
    const funcion = new Funcion(f);
    let x_l = inf;
    let x_u = sup;
    let x_r = x_l;
    let x_rold;
    let e_a = 100;
    results.push({
        x_l: x_l,
        x_u: x_u,
        x_r: x_r,
        e_a: e_a
    });
    while(e_a > tol) {
        x_rold = x_r;
        x_r = (x_l + x_u) / 2;
        e_a = 100 * math.abs((x_r - x_rold ) / x_r );
        // CASES
        const val = funcion.evaluate(x_l) * funcion.evaluate
        (x_r);
        if(val > 0) x_l = x_r;
        if(val < 0) x_u = x_r;
        if(val == 0) e_a = 0;
        // Guardar resultados
        results.push({
            x_l: x_l,
            x_u: x_u,
            x_r: x_r,
            e_a: e_a
        });
    }
    return {
        results: results,
        raiz: x_r
    };
}
function FalsaPosicion(inf = 0, sup = 0, f = "", tol = 0) {
    const funcion = new Funcion(f);
    let x_l = inf;
    let x_u = sup;
    let x_r = x_l;
    let e_a = 100; 
    let f_l = funcion.evaluate(x_l);
    let f_u= funcion.evaluate(x_u);
    const results = [];
    results.push({
        x_l: x_l,
        x_u: x_u,
        x_r: x_r,
        e_a: e_a
    });
    while(e_a > tol) {
        let x_rold = x_r;
        x_r = x_u - (f_u * (x_l - x_u)) / (f_l - f_u);
        e_a = 100 * math.abs((x_r - x_rold ) / x_r );
        const val = f_l * funcion.evaluate(x_r);
        if(val > 0) {
            x_l = x_r;
            f_l = funcion.evaluate(x_l);
        }
        if(val < 0) {
            x_u = x_r;
            f_u = funcion.evaluate(x_u);
        }
        if(val == 0) {
            e_a = 0;
        }
        // Guardar resultados
        results.push({
            x_l: x_l,
            x_u: x_u,
            x_r: x_r,
            e_a: e_a
        });
    }
    return {
        results: results,
        raiz: x_r
    };
};
function NewtonRaphson(x_i, f = "", tol = 0, n_max = 0) {
    let results = [];
    let x_r = x_i;
    let n = 0;
    let e_a = 100; 
    const funcion = new Funcion(f);
    const derivative = new Funcion(
        math.derivative(funcion.expresion, "x").toString()
    );
    results.push({
        x_r: x_r,
        f_xr: funcion.evaluate(x_r),
        e_a: e_a
    });
    while(e_a > tol && n < n_max) {
        x_i = x_r;
        const fx = funcion.evaluate(x_i);
        const Dx = derivative.evaluate(x_i);
        x_r = x_i - fx/ Dx;
        e_a = 100 * math.abs((x_r - x_i) / x_r);
        n++;
        results.push({
            x_r: x_r,
            f_xr: funcion.evaluate(x_r),
            e_a: e_a
        });
    }
    return results;
}
// ECUACIONES POLINOMIALES
function Tartaglia_Cardano(coeficientes) {
    const {a,b,c,d} = coeficientes;
    const B = b / a;
    const C = c/a;
    const D = d / a;
    const p = (3 * C - math.pow(B,2)) / 3;
    const q = (2*math.pow(B,3) - 9*B*C + 27*D)/27;
    const delta = math.pow(q,2) + (4*math.pow(p,3))/27;
    let z1 = '', z2 = '', z3 = '';
    if(delta > 0) {
        const u = math.nthRoot((-q+math.sqrt(delta))/2,3);
        const v = math.nthRoot((-q-math.sqrt(delta))/2,3);
        z1 = `${u + v}`;
        z2 = `${-1/2 * (u + v)} + ${math.sqrt(3) / 2 * (u + v)}i`;
        z2 = `${-1/2 * (u + v)} - ${math.sqrt(3) / 2 * (u + v)}i`;
    }
    if(delta == 0) {
        z1 = 3 * q / p;
        z2 = z1 / -2;
        z3 = z2;
    }
    if(delta < 0) {
        const w = 2 * math.sqrt(-p / 3);
        const theta = math.acos(((3 * q) / (2*p)) * (math.sqrt(-3 / p)));
        z1 = w * math.cos(theta / 3);
        z2 = w * math.cos((theta + 2*math.pi) / 3);
        z3 = w * math.cos((theta + 4*math.pi) / 3);
    }
    return {
        x1 : z1 - B / 3,
        x2 : z2 - B / 3,
        x3 : z3 - B / 3
    }
}
function Ferrari(coeficientes) {
    const {a,b,c,d,e} = coeficientes;
    const B = b/a;
    const C = c/a;
    const D = d/a;
    const E = e/a;
    // p y q
    const p = (8*C - 3*math.pow(B, 2)) / 8;
    const q = (8*D - 4*B*C + math.pow(B, 3)) / 8;
    const r = (256*E - 64*B*D + 16*math.pow(B,2)*C - 3*math.pow(B,4)) / 256;
    const coeficienteCubicaResolvente = {
        a: 1,
        b: 2*p,
        c: math.pow(p, 2) - 4*r,
        d: -math.pow(q, 2)
    }
    console.log(coeficienteCubicaResolvente);
    const {x1, x2, x3} = Tartaglia_Cardano(coeficienteCubicaResolvente);
    let y;
    if(typeof x1 == "number" && x1 > 0) {
        y = x1;
    } else {
        if(typeof x2 == "number" && x2 > 0) {
            y = x2;
        } else {
            y = x3
        }
    }
    const y1 = (math.sqrt(y)+math.sqrt(-y-2*p-2*q/math.sqrt(y)))/2 - B/4;
    const y2 = (math.sqrt(y)-math.sqrt(-y-2*p-2*q/math.sqrt(y)))/2 - B/4;
    const y3 = (-math.sqrt(y)+math.sqrt(-y-2*p+2*q/math.sqrt(y)))/2 - B/4;
    const y4 = (-math.sqrt(y)-math.sqrt(-y-2*p+2*q/math.sqrt(y)))/2 - B/4;
    return {
        y1: y1,
        y2: y2,
        y3: y3,
        y4: y4 
    }
}
function Birge_Vieta(pol= "", p0 = 0, tol = 0, n_max = 0) {
    // HALLAMOS EL GRADO DEL POLINOMIO
    let aux = new Funcion(pol);
    let grado = 0;
    while(aux.expresion != "0") {
        aux = new Funcion(
            math.derivative(aux.expresion, "x").toString()
        );
        grado++;
    }
    grado--;

    const resultados = [];
    
    // CONDICIONES INICIALES
    let funcion = new Funcion(pol);
    let derivada = new Funcion(
        math.derivative(funcion.expresion, "x").toString()
    );  
    for (let i = 0; i < grado; i++) {
        let e = 100;
        let cont = 0;
        let xi = p0;
        while(e > tol && cont < n_max) {
            const cociente = funcion.evaluate(xi) / derivada.evaluate(xi);
            xi -= cociente;
            e = math.abs(cociente);
            cont++;
        }
        resultados.push(xi);
        const div_sintetica = math.simplify(`(${funcion.expresion}) / (x-(${xi}))`).toString();
        funcion = new Funcion(div_sintetica);
        derivada = new Funcion(
            math.derivative(funcion.expresion, "x").toString()
        );
    }
    return resultados;
}   

export { Biseccion, FalsaPosicion, NewtonRaphson, Tartaglia_Cardano, Ferrari, Birge_Vieta };